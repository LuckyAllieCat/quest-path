#!/bin/bash
# Waits (wall-clock, suspend-safe) for the Codex usage-limit reset at 11:08, then regenerates the three weak tiles.
cd "$(dirname "$(readlink -f "$0")")"
rm -f logs/status_regen.txt
target=$(date -d "11:08" +%s); [ $target -lt $(date +%s) ] && target=$((target+86400))
while [ $(date +%s) -lt $target ]; do sleep 60; done
run() { name=$1; shift; ( cat prompts/style_strict4.txt; echo; cat prompts/$name.txt ) | timeout 3000 codex exec --skip-git-repo-check -s workspace-write "$@" - > logs/$name.log 2>&1; echo "DONE $name $?" >> logs/status_regen.txt; }
run R2d -i assets/path_r_1.png &
run S1d -i assets/path_sql_2.png &
run I1d -i assets/path_italian_2.png &
wait
python3 tools/slots.py x logs path_r_2 path_sql_1 path_italian_1 > logs/regen_slots.txt 2>&1
echo "ALL DONE $(date)" >> logs/status_regen.txt
