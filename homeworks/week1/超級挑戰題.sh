#!/bin/bash
#read -p "GitHub username: " name
#str=$(curl -s https://api.github.com/users/)
#$str"${i}" | grep '\"name\"' | cut -d'"' -f '4' 
curl -s https://api.github.com/users/${1} | grep '\"name\"' | cut -d'"' -f 4
curl -s https://api.github.com/users/${1} | grep '\"bio\"' | cut -d'"' -f 4
curl -s https://api.github.com/users/${1} | grep '\"location\"' | cut -d'"' -f 4
curl -s https://api.github.com/users/${1} | grep '\"blog\"' | cut -d'"' -f 4 
