#!/bin/bash
set -e

GIT_URL="https://punchagan:"${GITHUB_TOKEN}"@github.com/thatte-idli-kaal-soup/thatteidlikaalsoup.team.git"

# Push to GitHub
git add content/
git commit -m "Updating instagram feed from TravisCI [skip ci]" \
    --author "punchagan (travisci) <punchagan+travis@muse-amuse.in>"
git push "${GIT_URL}" master:master
