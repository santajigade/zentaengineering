# Makes a 1200x675 (16:9) copy of each featured JPG for Google Discover (padded with the card navy, no cropping).
from PIL import Image
import glob, os
for f in glob.glob('public/images/featured/*.jpg'):
    if f.endswith('-16x9.jpg'): continue
    out = f[:-4] + '-16x9.jpg'
    if os.path.exists(out) and os.path.getmtime(out) >= os.path.getmtime(f): continue
    im = Image.open(f).convert('RGB')
    if im.size != (1200, 630): im = im.resize((1200, 630), Image.LANCZOS)
    bg = Image.new('RGB', (1200, 675), im.getpixel((2, 2)))
    bg.paste(im, (0, 22)); bg.save(out, quality=85, optimize=True)
