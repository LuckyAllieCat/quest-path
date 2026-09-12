# Build docs/: optimised copies of index.html, content.js and assets (sprites max 512px, backgrounds palette-quantised)
import os, shutil, glob
from PIL import Image
os.makedirs('docs/assets', exist_ok=True)
for f in ['index.html','content.js','content2.js','content3.js']: shutil.copy(f, 'docs/'+f)
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
