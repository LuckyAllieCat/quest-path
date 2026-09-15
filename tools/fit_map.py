# Fit a cleaned map picture (screenshot framing, 1056x1490) into the 1024x1536 map_bg frame used for overlay coordinates.
# The screenshot shows map_bg scaled by SC and offset by (DX, DY); invert that, fill the thin uncovered edges from the old map.
import sys
from PIL import Image
SC, DX, DY = 1.014, -5, -36
src, old, out = sys.argv[1], sys.argv[2], sys.argv[3]
im = Image.open(src).convert('RGB'); base = Image.open(old).convert('RGB')
w, h = round(im.width / SC), round(im.height / SC)
x0, y0 = round(-DX / SC), round(-DY / SC)
fitted = im.resize((w, h), Image.LANCZOS)
base.paste(fitted, (x0 - x0, y0))            # align vertically; horizontal 5px offset dropped so the left edge stays fully covered
base.save(out, optimize=True)
print(out, base.size, 'covered y', y0, '..', y0 + h)
