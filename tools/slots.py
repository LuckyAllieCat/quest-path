import sys, json
from PIL import Image, ImageDraw
def sand(p): r,g,b=p[:3]; return r>185 and 150<g<230 and 100<b<185 and r-b>35 and g-b>15
def track(im):
    W,H=im.size; px=im.load(); cx=W//2; centres={}
    for y in range(0,H):
        # find sand runs on this row, pick the one nearest to cx
        xs=[x for x in range(W) if sand(px[x,y])]
        runs=[]
        if xs:
            s=xs[0];p=xs[0]
            for x in xs[1:]:
                if x>p+3: runs.append((s,p)); s=x
                p=x
            runs.append((s,p))
            runs=[r for r in runs if r[1]-r[0]>40]
        if runs:
            a,b=min(runs,key=lambda r:abs((r[0]+r[1])/2-cx)); 
            if abs((a+b)/2-cx)<120: cx=(a+b)//2
        centres[y]=cx
    return centres
def propose(name, ys=(6,22,38,54,70,86)):
    im=Image.open(f'assets/{name}.png').convert('RGB'); W,H=im.size
    c=track(im)
    slots=[[round(c[int(H*y/100)]/W*100),y] for y in ys]
    chest=[round(c[int(H*0.96)]/W*100),96]
    d=ImageDraw.Draw(im)
    for x,y in slots+[chest]:
        X,Y=x/100*W,y/100*H; d.ellipse([X-40,Y-40,X+40,Y+40],outline='red',width=6)
    for y in range(0,100,10): d.line([(0,y/100*H),(W,y/100*H)],fill='magenta',width=1); d.text((5,y/100*H),f'{y}%',fill='magenta')
    for x in range(0,100,10): d.line([(x/100*W,0),(x/100*W,H)],fill='magenta',width=1); d.text((x/100*W,5),f'{x}',fill='magenta')
    im.resize((512,768)).save(f'{sys.argv[2]}/ov_{name}.png')
    print(name, 'slots', slots, 'chest', chest)
for n in sys.argv[3:]: propose(n)
