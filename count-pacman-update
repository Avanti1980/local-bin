#!/usr/bin/env bash

echo 自 $(head -n1 /var/log/pacman.log | cut -d '[' -f 2 | cut -d ']' -f 1) 以来 $(head -n1 /var/log/pacman.log | cut -d '[' -f 3 | cut -d ']' -f 1) 一共滚了 $(grep -c "full system upgrade" /var/log/pacman.log) 次
