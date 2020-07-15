#!/bin/bash
#test 0621
read -p "number: " n
for ((i=$n;i>0;i--))
do
	touch "$i".js
done
echo done
