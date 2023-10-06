#!/usr/bin/env bash

# Then listen command gives you a listing of processes listening on some port and
# listen smth greps this for some pattern.
# Having this, it's quite easy to ask about particular process,
# e.g. listen dropbox, or port, e.g. listen 22

if [ $# -eq 0 ]; then
   lsof -iTCP -sTCP:LISTEN -n -P
elif [ $# -eq 1 ]; then
   lsof -iTCP -sTCP:LISTEN -n -P | grep -i --color $1
else
    echo "Usage: listen [pattern]"
fi