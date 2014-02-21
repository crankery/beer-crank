while read line
do

if [ '$line' != '<COLOR>' ]
then
if [ '$line' != '</COLOR>' ]
then
echo $line
fi
fi
done
