#!/usr/bin/env bash

# Delete all local branches except master and current
BRANCHES=$(git branch | grep -v "master" | grep -v ^*)

if [[ $BRANCHES ]]; then
    git branch -D $BRANCHES
fi
