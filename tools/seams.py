# Make path tiles stack seamlessly: warp each row in the top/bottom bands sideways so the path meets
# both edges at the same canonical x-range on every tile. Borders stay fixed. Originals kept as assets/_preseam_*.
import sys, os, shutil, statistics as st
from PIL import Image
CL, CR = 447, 574          # canonical sand extents at the tile edges (most common top-edge values)
BL, BR = 150, 874          # warp only between the side borders
BAND = 220                 # rows over which the correction fades out

def sand(p): r, g, b = p[:3]; return r > 185 and 150 < g < 230 and 100 < b < 185 and r - b > 35 and g - b > 15

def path_run(px, W, y):
    xs = [x for x in range(BL, BR) if sand(px[x, y])]
    if not xs: return None
    runs, s, p = [], xs[0], xs[0]
    for x in xs[1:]:
        if x > p + 6: runs.append((s, p)); s = x
        p = x
    runs.append((s, p)); runs = [r for r in runs if r[1] - r[0] > 40]
    return min(runs, key=lambda r: abs((r[0] + r[1]) / 2 - W / 2)) if runs else None

def edges(px, W, ys):
    raw = {y: path_run(px, W, y) for y in ys}
    out, last = {}, None
    for y in ys:  # median over +-5 rows, carry over gaps
        win = [raw[k] for k in range(y - 5, y + 6) if raw.get(k)]
        if win: last = (st.median(r[0] for r in win), st.median(r[1] for r in win))
        out[y] = last
    return out

def smooth(t): return t * t * (3 - 2 * t)

def fix(path):
    im = Image.open(path).convert('RGB'); W, H = im.size; src = im.load()
    out = im.copy(); dst = out.load()
    for band in (range(0, BAND), range(H - 1, H - 1 - BAND, -1)):
        ys = list(band); e = edges(src, W, ys)
        e0 = st.median(e[y][0] for y in ys[:8]), st.median(e[y][1] for y in ys[:8])
        dl, dr = CL - e0[0], CR - e0[1]
        for i, y in enumerate(ys):
            if not e[y]: continue
            w = smooth(1 - i / BAND)
            sl, sr = e[y]; tl, tr = sl + w * dl, sr + w * dr
            anchors = [(BL, BL), (tl, sl), (tr, sr), (BR, BR)]   # (output x, source x)
            for x in range(BL, BR):
                for (ax, asx), (bx, bsx) in zip(anchors, anchors[1:]):
                    if ax <= x <= bx:
                        sx = asx + (x - ax) * (bsx - asx) / max(1e-6, bx - ax); break
                dst[x, y] = src[min(W - 1, max(0, int(round(sx)))), y]
    return out

for p in sys.argv[1:]:
    n = os.path.basename(p); bak = os.path.join(os.path.dirname(p), '_preseam_' + n)
    if not os.path.exists(bak): shutil.copy(p, bak)
    fix(bak).save(p)
    print('fixed', n)
