# Build docs/: optimised copies of index.html, content.js and assets (sprites max 512px, backgrounds palette-quantised)
import os, shutil, glob
from PIL import Image
os.makedirs('docs/assets', exist_ok=True)
for f in ['index.html','content.js','content2.js','content3.js','manifest.webmanifest']: shutil.copy(f, 'docs/'+f)
for p in sorted(glob.glob('assets/*.png')):
    n = os.path.basename(p)
    if n.startswith('_'): continue
    im = Image.open(p).convert('RGBA')
    if 'bg' in n or n.startswith('path_'):
        im.quantize(colors=256, method=Image.Quantize.FASTOCTREE).save('docs/'+p, optimize=True)
    else:
        im.thumbnail((512,512), Image.Resampling.LANCZOS)
        im.save('docs/'+p, optimize=True)
tot = sum(os.path.getsize(f) for f in glob.glob('docs/assets/*'))
print(len(glob.glob('docs/assets/*')), 'files', tot//1024, 'KB total')
# Cache-bust: stamp asset URLs in docs/index.html so browsers fetch changed images (literal paths get a per-file hash, templated paths a build hash)
import re, hashlib
h = lambda b: hashlib.md5(b).hexdigest()[:8]
allh = h(b''.join(open(p, 'rb').read() for p in sorted(glob.glob('assets/*.png')) if not os.path.basename(p).startswith('_')))
html = open('docs/index.html').read()
html = re.sub(r"assets/([A-Za-z0-9_]+\.png)", lambda m: f"assets/{m.group(1)}?v={h(open('assets/'+m.group(1),'rb').read())}" if os.path.exists('assets/'+m.group(1)) else m.group(0), html)
html = re.sub(r"assets/\$\{[^}]*\}(?:\.png)?", lambda m: m.group(0) + '?v=' + allh, html)
open('docs/index.html', 'w').write(html)
