#!/bin/bash
# Waits for the Codex usage reset, then redraws the remaining room items (skipping finished ones), keys them and rebuilds.
cd "$(dirname "$(readlink -f "$0")")"
target=1789421100   # 11:25 PM, a few minutes after the reported reset
while [ $(date +%s) -lt $target ]; do sleep 60; done
rm -f logs/status_roomlater.txt
run() { k=$1; timeout 3000 codex exec --skip-git-repo-check -s workspace-write -i assets/_room/crop_$k.png - < prompts/ROOM_$k.txt > logs/ROOM_$k.log 2>&1; echo "DONE $k $?" >> logs/status_roomlater.txt; }
todo=(); for k in bed window desk bookshelf mapnotes shelf poster hangplant tallplant backpack cushion rightplant chest cornerplant books; do [ -f assets/_room/gen_$k.png ] || todo+=($k); done
for ((i=0;i<${#todo[@]};i+=4)); do for k in "${todo[@]:i:4}"; do run $k & done; wait; done
[ -f assets/icon_shop.png ] || { ( cat prompts/common.txt; echo; cat prompts/ICONS_CUST.txt ) | timeout 1800 codex exec --skip-git-repo-check -s workspace-write -i assets/nav_home.png -i assets/nav_quests.png - > logs/ICONS_CUST.log 2>&1; echo "DONE icons $?" >> logs/status_roomlater.txt; }
python3 tools/key_items.py >> logs/status_roomlater.txt 2>&1 && python3 build.py >> logs/status_roomlater.txt 2>&1
echo "ALL DONE $(date)" >> logs/status_roomlater.txt
