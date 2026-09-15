# Even out grass colour between the two tiles of each subject so tile seams show no colour step.
# Each tile's greens get a per-channel gain towards the pair's average grass colour. Originals kept as assets/_pregrass_*.
import os, shutil, statistics as st
from PIL import Image
def is_grass(p): r, g, b = p; return g > r + 25 and g > b + 40 and g > 150
def grass_colour(im):
    px = im.load(); W, H = im.size
    cs = [px[x, y] for y in range(0, H, 5) for x in range(160, W - 160, 5) if is_grass(px[x, y])]
    return tuple(st.median(c[i] for c in cs) for i in range(3)), len(cs)
def apply(im, gain):
    out = im.copy(); px = out.load(); W, H = im.size
    for y in range(H):
        for x in range(W):
            r, g, b = px[x, y]
            if g > r + 8 and g > b + 8:   # any green pixel (grass, tufts, leaves) shifts together
                px[x, y] = (min(255, round(r * gain[0])), min(255, round(g * gain[1])), min(255, round(b * gain[2])))
    return out
for s in ['python', 'sql', 'r', 'italian', 'turkish']:
    ims = {}
    for n in (1, 2):
        p = f'assets/path_{s}_{n}.png'; bak = f'assets/_pregrass_path_{s}_{n}.png'
        if not os.path.exists(bak): shutil.copy(p, bak)
        ims[n] = Image.open(bak).convert('RGB')
    cols = {n: grass_colour(ims[n])[0] for n in ims}
    target = tuple((cols[1][i] + cols[2][i]) / 2 for i in range(3))
    for n in ims:
        gain = tuple(target[i] / cols[n][i] for i in range(3))
        apply(ims[n], gain).save(f'assets/path_{s}_{n}.png')
    print(s, {n: '#%02x%02x%02x' % tuple(map(round, cols[n])) for n in cols}, '-> #%02x%02x%02x' % tuple(map(round, target)))
