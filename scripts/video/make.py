#!/usr/bin/env python3
"""Blue-grid explainer videos. See scripts/video/README.md.

  python3 scripts/video/make.py check <slug> [<slug> ...]
      Render review stills to /tmp/videocheck/<slug>-<size>-<n>.png (a step card, the key fact card,
      and for social sizes the end card). Look at every one and fix overlap or clipping before rendering.

  python3 scripts/video/make.py web <slug> [<slug> ...]
      Render the in-article files into public/videos/: <slug>-16x9.mp4 (1280x720), <slug>-9x16.mp4 (720x1280)
      and matching -poster.webp images. 18.5 s, ends on the key fact card, no end card.

  python3 scripts/video/make.py social <slug> [<slug> ...]
      Render the 22 s social files to /tmp/social/<slug>-1080x1920.mp4 and <slug>-1080x1350.mp4.

Add --jobs N to render several videos in parallel (default 3).
"""
import asyncio, hashlib, os, subprocess, sys, shutil
from playwright.async_api import async_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, '..', '..'))
FPS = 30
CHROME = next((p for p in ['/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser'] if os.path.exists(p)), None)


def launch_args():
    return {'executable_path': CHROME} if CHROME else {}


async def open_page(b, slug, w, h, web):
    pg = await b.new_page(viewport={'width': w, 'height': h})
    await pg.goto(f'file://{HERE}/blue.html?v={slug}' + ('&web=1' if web else ''))
    await pg.evaluate('document.fonts.ready')
    await pg.wait_for_timeout(500)
    await pg.evaluate('fitTitle()')
    if not await pg.evaluate('!!window.DUR'):
        raise SystemExit(f'{slug}: spec failed to load (scripts/video/specs/{slug}.js)')
    return pg


def music(slug, dur, out):
    seed = int(hashlib.md5(slug.encode()).hexdigest(), 16) % 1000
    subprocess.run([sys.executable, os.path.join(HERE, 'music.py'), str(dur), out, str(seed), '3,6.6,10.2,14,18.5'], check=True)


async def render(b, slug, w, h, web, out, scale=None, crf=18, preset='veryfast', abr='160k', poster=None):
    pg = await open_page(b, slug, w, h, web)
    dur = await pg.evaluate('DUR')
    wav = f'/tmp/vmusic_{slug}_{dur}.wav'
    if not os.path.exists(wav):
        music(slug, dur, wav)
    vf = (f'scale={scale},' if scale else '') + 'format=yuv420p'
    af = f'afade=t=out:st={dur - 0.8}:d=0.8' if web else 'anull'
    tmp = out + '.part.mp4'
    ff = subprocess.Popen(['ffmpeg', '-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', str(FPS), '-i', '-',
                           '-i', wav, '-map', '0:v', '-map', '1:a', '-vf', vf, '-af', af, '-c:v', 'libx264', '-crf', str(crf),
                           '-preset', preset, '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', abr, '-shortest', '-movflags', '+faststart', tmp],
                          stdin=subprocess.PIPE)
    for i in range(int(FPS * dur)):
        await pg.evaluate(f'seek({i / FPS})')
        shot = await pg.screenshot(type='jpeg', quality=92)
        ff.stdin.write(shot)
        if poster and i == int(2.9 * FPS):
            png = await pg.screenshot(type='png')
            open('/tmp/_poster.png', 'wb').write(png)
            subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', '/tmp/_poster.png', '-vf', f'scale={scale}' if scale else 'null',
                            '-c:v', 'libwebp', '-quality', '80', poster], check=True)
    ff.stdin.close()
    if ff.wait() != 0:
        raise SystemExit(f'ffmpeg failed for {out}')
    os.replace(tmp, out)
    await pg.close()
    print('wrote', os.path.relpath(out, ROOT) if out.startswith(ROOT) else out)


async def check(b, slug):
    os.makedirs('/tmp/videocheck', exist_ok=True)
    for name, w, h, web, times in [('16x9', 1920, 1080, True, [8, 16]), ('9x16', 1080, 1920, True, [8, 16]),
                                   ('1350', 1080, 1350, False, [8, 16, 20.5])]:
        pg = await open_page(b, slug, w, h, web)
        for n, t in enumerate(times):
            await pg.evaluate(f'seek({t})')
            p = f'/tmp/videocheck/{slug}-{name}-{n}.png'
            await pg.screenshot(path=p)
            print(p)
        await pg.close()


async def job(mode, slug, sem):
    async with sem:
        async with async_playwright() as p:
            b = await p.chromium.launch(**launch_args())
            if mode == 'check':
                await check(b, slug)
            elif mode == 'web':
                d = os.path.join(ROOT, 'public', 'videos'); os.makedirs(d, exist_ok=True)
                await render(b, slug, 1920, 1080, True, f'{d}/{slug}-16x9.mp4', scale='1280:720', crf=28, preset='slow', abr='96k', poster=f'{d}/{slug}-16x9-poster.webp')
                await render(b, slug, 1080, 1920, True, f'{d}/{slug}-9x16.mp4', scale='720:1280', crf=28, preset='slow', abr='96k', poster=f'{d}/{slug}-9x16-poster.webp')
            elif mode == 'social':
                os.makedirs('/tmp/social', exist_ok=True)
                await render(b, slug, 1080, 1920, False, f'/tmp/social/{slug}-1080x1920.mp4')
                await render(b, slug, 1080, 1350, False, f'/tmp/social/{slug}-1080x1350.mp4')
            await b.close()


def main():
    args = sys.argv[1:]
    jobs = 3
    if '--jobs' in args:
        i = args.index('--jobs'); jobs = int(args[i + 1]); del args[i:i + 2]
    if len(args) < 2 or args[0] not in ('check', 'web', 'social'):
        print(__doc__); sys.exit(1)
    mode, slugs = args[0], args[1:]
    for s in slugs:
        if not os.path.exists(os.path.join(HERE, 'specs', s + '.js')):
            raise SystemExit(f'missing spec: scripts/video/specs/{s}.js')
    if not shutil.which('ffmpeg'):
        raise SystemExit('ffmpeg not found')
    sem = asyncio.Semaphore(1 if mode == 'check' else jobs)

    async def run():
        await asyncio.gather(*(job(mode, s, sem) for s in slugs))
    asyncio.run(run())


if __name__ == '__main__':
    main()
