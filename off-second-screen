#!/usr/bin/env bash

connected_outputs=$(xrandr | grep " connected " | cut -d ' ' -f 1)
primary_output=$(xrandr | grep " connected primary " | cut -d ' ' -f 1)

for connected_output in $connected_outputs; do
    if [ "$connected_output" != "$primary_output" ]; then
        xrandr --output $connected_output --off
    fi
done
