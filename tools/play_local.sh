#!/bin/bash
# Serves the built site (docs/) on localhost and opens it — test before committing. Run `python3 build.py` first after edits.
# Uses a Chromium-style app window when available, otherwise a new Firefox window.
cd "$(dirname "$(readlink -f "$0")")/.."
PORT=8770; URL="http://localhost:$PORT/"
if ! ss -ltn | grep -q ":$PORT "; then
  setsid python3 tools/serve_nocache.py $PORT docs >/dev/null 2>&1 < /dev/null &
  for i in $(seq 20); do ss -ltn | grep -q ":$PORT " && break; sleep 0.2; done
fi
for b in chromium chromium-browser google-chrome brave-browser microsoft-edge; do
  command -v $b >/dev/null && exec $b --app="$URL" --window-size=460,900 --class=QuestPath
done
exec firefox --new-window "$URL"
