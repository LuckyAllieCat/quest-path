# Key the magenta background out of Codex-drawn room items and place them on the 2x room canvas.
# Writes assets/room_<id>.png (tight sprite) and prints each item's position as % of the room (x, y, w, h).
import json, sys, os
from PIL import Image, ImageFilter
boxes = json.load(open('assets/_room/boxes.json'))
RW, RH = 880, 480
out = {}
for k, (x0, y0, x1, y1) in boxes.items():
    p = f'assets/_room/gen_{k}.png'
    if not os.path.exists(p): continue
    im = Image.open(p).convert('RGBA'); px = im.load(); W, H = im.size
    for y in range(H):
        for x in range(W):
            r, g, b, a = px[x, y]
            d = ((255 - r) ** 2 + g ** 2 + (255 - b) ** 2) ** .5          # distance from #FF00FF
            if d < 110: px[x, y] = (0, 0, 0, 0)
            elif d < 170 and r > 150 and b > 150 and g < 120:              # magenta fringe: fade out
                px[x, y] = (r, g, b, int(255 * (d - 110) / 60))
    bb = im.getbbox(); sprite = im.crop(bb)
    sprite.save(f'assets/room_{k}.png', optimize=True)
    # position in room % : crop box origin + bbox (gen image is the crop at 2x)
    sx, sy = x0 + bb[0] / 2, y0 + bb[1] / 2
    out[k] = [round(100 * sx / RW, 2), round(100 * sy / RH, 2), round(100 * sprite.width / 2 / RW, 2), round(100 * sprite.height / 2 / RH, 2)]
    print(k, out[k])
json.dump(out, open('assets/_room/placed.json', 'w'))

# write positions into index.html between the ROOMPOS markers
import re
src = open('index.html').read()
merged = json.loads(re.search(r"/\*ROOMPOS\*/(.*?)/\*END\*/", src, re.S).group(1))
merged.update(out)
src = re.sub(r"/\*ROOMPOS\*/.*?/\*END\*/", "/*ROOMPOS*/" + json.dumps(merged, separators=(',', ':')) + "/*END*/", src, flags=re.S)
open('index.html', 'w').write(src)
