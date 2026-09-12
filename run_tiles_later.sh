#!/bin/bash
# Waits for the Codex usage-limit reset, then generates the remaining themed tiles.
cd "$(dirname "$(readlink -f "$0")")"
rm -f logs/status_tiles2.txt
now=$(date +%s); target=$(date -d "22:57" +%s); [ $target -lt $now ] && target=$((target+86400))
sleep $((target-now))
run() { name=$1; shift; ( cat prompts/common.txt; echo; cat prompts/tiles_common.txt; echo; cat prompts/$name.txt ) | timeout 5400 codex exec --skip-git-repo-check -s workspace-write "$@" - > logs/$name.log 2>&1; echo "DONE $name $?" >> logs/status_tiles2.txt; }
for j in T4 T5 T6; do run $j -i /tmp/pasted-image-158.png -i /tmp/pasted-image-223.png & done
wait
