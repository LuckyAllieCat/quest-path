# Snap lesson-node slots and chests in index.html onto the centre line of each tile's drawn path.
import re
from PIL import Image, ImageFilter
def sand(p): r, g, b = p[:3]; return r > 185 and 150 < g < 230 and 100 < b < 185 and r - b > 35 and g - b > 15
def depth_map(path):
    im = Image.open(path).convert('RGB').resize((256, 384), Image.NEAREST); px = im.load()
    m = Image.new('L', im.size); mp = m.load()
    for y in range(384):
        for x in range(256): mp[x, y] = 255 if sand(px[x, y]) else 0
    m = m.filter(ImageFilter.MaxFilter(5)).filter(ImageFilter.MinFilter(5))   # close texture marks inside the path
    depth = [[0] * 256 for _ in range(384)]; cur = m
    for k in range(1, 30):
        cp = cur.load()
        for y in range(384):
            row = depth[y]
            for x in range(256):
                if cp[x, y]: row[x] = k
        cur = cur.filter(ImageFilter.MinFilter(3))
        if not cur.getbbox(): break
    return depth
def snap(depth, x, y, rx=40, ry=4):
    cx, cy = round(x / 100 * 256), round(y / 100 * 384)
    best = max(((depth[j][i] - 0.12 * (abs(i - cx) + 2 * abs(j - cy)), i, j)
                for j in range(max(0, cy - ry), min(384, cy + ry + 1))
                for i in range(max(0, cx - rx), min(256, cx + rx))), default=None)
    return [round(best[1] / 256 * 100), y] if best and depth[best[2]][best[1]] > 2 else [x, y]
src = open('index.html').read()
def upd(m):
    img, slots, chest = m.group(1), eval(m.group(2)), eval(m.group(3))
    d = depth_map(f'assets/{img}')
    ns = [snap(d, x, y) for x, y in slots]; nc = snap(d, *chest)
    if ns != slots or nc != chest: print(f'{img:22} {slots} -> {ns}  chest {chest} -> {nc}')
    return m.group(0).replace(m.group(2), str(ns).replace(' ', ''), 1).replace('chest:' + m.group(3), 'chest:' + str(nc).replace(' ', ''), 1)
src = re.sub(r"\{ img:'(path_[a-z_0-9]+\.png)', slots:(\[\[.*?\]\]), chest:(\[\d+,\d+\])", upd, src)
open('index.html', 'w').write(src)
