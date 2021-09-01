#!/usr/bin/env bash

line=$(cat /etc/pacman.conf | grep -n "\[testing\]")
no=$(echo ${line} | cut -d ':' -f 1)

if [[ $line =~ "#" ]]; then
    sed -i "${no},+1 s/#//g" /etc/pacman.conf
    echo The testing repository has been enabled
else
    sed -i "${no},+1 s/^/#&/g" /etc/pacman.conf
    echo The testing repository has been disabled
fi
