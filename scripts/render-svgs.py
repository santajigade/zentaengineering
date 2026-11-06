# Renders every inline <svg> in the given MDX files to /tmp/svgcheck/<file>-<n>.png for visual checking.
import re, sys, os, subprocess
os.makedirs('/tmp/svgcheck', exist_ok=True)
font = os.path.abspath('node_modules/@fontsource-variable/open-sans/files/open-sans-latin-wght-normal.woff2')
for f in sys.argv[1:]:
    s = open(f).read()
    for i, svg in enumerate(re.findall(r'<svg.*?</svg>', s, flags=re.S)):
        w = int(re.search(r'width="(\d+)"', svg).group(1)); h = int(re.search(r'height="(\d+)"', svg).group(1))
        html = f"<html><head><style>@font-face{{font-family:'Open Sans Variable';src:url(file://{font})}}body{{margin:0;background:#fff}}</style></head><body>{svg}</body></html>"
        p = f'/tmp/svgcheck/{os.path.basename(f)[:-4]}-{i}'
        open(p + '.html', 'w').write(html)
        subprocess.run(['google-chrome', '--headless=new', '--no-sandbox', '--disable-gpu', '--hide-scrollbars', f'--window-size={w},{h}', f'--screenshot={p}.png', f'file://{p}.html'], capture_output=True)
        print(p + '.png')
