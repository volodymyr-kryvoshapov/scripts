#!/usr/bin/env bash

PID=$(lsof -n -i4TCP:3000 | grep LISTEN | awk '{print $2}')

if [[ $PID ]]; then
    kill -9 $PID
fi
