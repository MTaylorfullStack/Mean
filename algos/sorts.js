function bubbleSort(array)
{
    var arrayLength=array.length;
    for(var i=0; i<array.length; i++)
    {
        for(var j=0; j<arrayLength; j++)
        {
            if(array[j]>array[j+1])
            {
                //swap values
                let temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }
        }
        arrayLength--;
    }
    return array;
}

function selectionSort(array)
{
    var min=0;
    for(var i=0; i<array.length; i++)
    {
        console.log(i);
        for(var j=i; j<array.length; j++)
        {
            if(array[j]< min)
                min=j;
        }
        //swap
        let temp=array[j];
        array[j]=array[min];
        array[min]=temp;
    }
}



var unSorted=[6,5,3,1,8,7,2,4];
var sorted=selectionSort(unSorted);
console.log(sorted);