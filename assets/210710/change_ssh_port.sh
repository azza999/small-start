#!/bin/bash

if [ $1 -gt 0 2> /dev/null ]
then
	echo 'ssh port change to $1'
else
	echo 'input $1 is not number'
	exit 1;
fi

col=`grep -n 'Port [0-9]*' /etc/ssh/sshd_config | cut -d ':' -f 1`
if [ 0 -lt `grep -c \#Port /etc/ssh/sshd_config` ]
then
	isIgnored=true
else
	isIgnored=false
fi


echo "target column : " $col
echo "Ignored : " $isIgnored

p='p'
colp=$col$p
echo $col
str=`sed -n $colp /etc/ssh/sshd_config`

s='s'
slash='/'
dest='Port '$1

echo $s$slash$str$slash$dest
echo `sed -n $s$slash$str$slash$dest /etc/ssh/sshd_config`
