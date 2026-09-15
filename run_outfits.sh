#!/bin/bash
# Generates outfit variants of the cat sprite and avatar (saved as assets/_new_cat_*.png for review).
cd "$(dirname "$(readlink -f "$0")")"
run() { name=$1; img=$2; ( cat prompts/outfit_common.txt; echo; cat prompts/$name.txt ) | timeout 3000 codex exec --skip-git-repo-check -s workspace-write -i $img - > logs/$name.log 2>&1; echo "DONE $name $?" >> logs/status_outfits.txt; }
for k in sweater italian winter; do run OUT_front_$k assets/cat_front.png & run OUT_avatar_$k assets/cat_avatar.png & done; wait
for k in rain wizard tulip; do run OUT_front_$k assets/cat_front.png & run OUT_avatar_$k assets/cat_avatar.png & done; wait
echo "ALL DONE $(date)" >> logs/status_outfits.txt
