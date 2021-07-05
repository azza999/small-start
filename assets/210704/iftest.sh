echo "if test with file" $1 $2

if [ -b $1 ]
then
        echo "-b"
fi

if [ -c $1 ]
then
        echo "-c"
fi

if [ -d $1 ]
then
        echo "-d"
fi

if [ -e $1 ]
then
        echo "-e"
fi

if [ -f $1 ]
then
        echo "-f"
fi

if [ -L $1 ]
then
        echo "-L"
fi

if [ -h $1 ]
then
        echo "-h"
fi

if [ -p $1 ]
then
	echo "-p"
fi

if [ -S $1 ]
then
	echo "-S"
fi

if [ -s $1 ]
then
	echo "-s"
fi

if [ -r $1 ]
then
	echo "-r"
fi

if [ -w $1 ]
then
	echo "-w"
fi

if [ -x $1 ]
then
	echo "-x"
fi

if [ -f $1 ]
then

	if [ -z `cat $1` ]
	then
		echo "-x"
	fi

	if [ -n `cat $1` ]
	then
		echo "-x"
	fi

fi

if [ -e $2 ]
then
	
	echo "2"

	if [ $1 -nt $2 ]
	then
		echo "1 -nt 2"
	fi

	if [ $1 -ot $2 ]
	then
		echo "1 -ot 2"
	fi

	if [ $1 -et $2 ]
	then
		echo "1 -et 2"
	fi

	if [ $1 = $2 ]
	then
		echo "1 = 2"
	fi

	if [ $1 != $2 ]
	then
		echo "1 != 2"
	fi

fi

if [ $1 -eq $2 ]

exit