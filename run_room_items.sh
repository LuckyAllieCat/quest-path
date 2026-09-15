#!/bin/bash
# Redraws each room item as a complete sprite on magenta (assets/_room/gen_*.png) for keying.
cd "$(dirname "$(readlink -f "$0")")"
rm -f logs/status_roomitems.txt
run() { k=$1; timeout 3000 codex exec --skip-git-repo-check -s workspace-write -i assets/_room/crop_$k.png - < prompts/ROOM_$k.txt > logs/ROOM_$k.log 2>&1; echo "DONE $k $?" >> logs/status_roomitems.txt; }
ids=(bed window desk bookshelf rug nightstand mapnotes shelf poster hangplant tallplant backpack cushion rightplant chest cornerplant books)
for ((i=0;i<${#ids[@]};i+=6)); do for k in "${ids[@]:i:6}"; do run $k & done; wait; done
echo "ALL DONE $(date)" >> logs/status_roomitems.txt
