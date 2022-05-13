#!/usr/bin/env bash

# Delete all local branches but master and the current one, only if they are fully merged with master
BRANCHES=$(git branch --merged master | grep -v master | grep -v \*)

if [[ $BRANCHES ]]; then
    git branch -d $BRANCHES
fi
