#!/usr/bin/env bash

connected_outputs=$(xrandr | grep " connected " | cut -d ' ' -f 1)
primary_output=$(xrandr | grep " connected primary " | cut -d ' ' -f 1)

primary_width=$(xrandr | grep " connected primary " | cut -d ' ' -f 4 | cut -d '+' -f 1 | cut -d 'x' -f 1)
primary_height=$(xrandr | grep " connected primary " | cut -d ' ' -f 4 | cut -d '+' -f 1 | cut -d 'x' -f 2)

connected_width=$(xrandr | grep " +  " | sed 's/[ ]*//' | cut -d ' ' -f 1 | cut -d 'x' -f 1)
connected_height=$(xrandr | grep " +  " | sed 's/[ ]*//' | cut -d ' ' -f 1 | cut -d 'x' -f 2)

for connected_output in $connected_outputs; do
    if [ "$connected_output" != "$primary_output" ]; then
        if [ $1 == "r" ]; then # 右扩展
            xrandr --output $primary_output --auto --pos 0x0 --output $connected_output --auto --pos "$primary_width"x0
        fi
        if [ $1 == "b" ]; then # 下扩展
            xrandr --output $primary_output --auto --pos 0x0 --output $connected_output --auto --pos 0x"$primary_height"
        fi
        if [ $1 == "l" ]; then # 左扩展
            xrandr --output $primary_output --auto --pos "$connected_width"x0 --output $connected_output --auto --pos 0x0
        fi
        if [ $1 == "a" ]; then # 上扩展
            xrandr --output $primary_output --auto --pos 0x"$connected_height" --output $connected_output --auto --pos 0x0
        fi
    fi
done
