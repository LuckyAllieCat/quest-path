#!/bin/bash
# Repaints coding tiles with language props (edit mode, style kept); candidates saved as assets/_edit_*.png for review.
cd "$(dirname "$(readlink -f "$0")")"
run() { name=$1; shift; ( cat prompts/edit_common.txt; echo; cat prompts/$name.txt ) | timeout 3000 codex exec --skip-git-repo-check -s workspace-write "$@" - > logs/$name.log 2>&1; echo "DONE $name $?" >> logs/status_edit.txt; }
run E_IT2 -i assets/path_r_1.png &
run E_TR1 -i assets/path_sql_1.png &
run E_TR2 -i assets/path_python_2.png &
wait
run E_RU1 -i assets/path_r_2.png &
run E_RU2 -i assets/path_sql_2.png &
wait
echo "ALL DONE $(date)" >> logs/status_edit.txt
