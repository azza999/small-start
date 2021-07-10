#!/bin/bash

col=`grep -n 'Port [0-9]*' /etc/ssh/sshd_config | cut -d ':' -f 1`
if [ 0 -lt `grep -v \# /etc/ssh/sshd_config | grep -c Port` ]
then
	isIgnored=true
else
	isIgnored=false
fi


echo "target column : " $col
echo "Ignored : " $isIgnored