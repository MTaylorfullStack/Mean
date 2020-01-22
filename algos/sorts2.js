function bubbleSort(array)
{
    var arrayLength=array.length
    var flag=false;
    for(var i=0; i<array.length; i++)
    {
        for(var j=0; j<arrayLength; j++)
    {
        if(array[j]>array[j+1])
        {
            flag=true;
            let temp=array[j]
            array[j]=array[j+1]
            array[j+1]=temp
        }
        if(flag == false)
            return array;
    }
    arrayLength--;
    }
    return array;
}

function selectionSort(array)
{
    for(var i=0; i<array.length; i++)
    {
        var min=Number.MAX_VALUE;
        var minPlace;
        for(var j=i; j<array.length; j++)
        {
            if(array[j]< min)
            {
                min=array[j]
                minPlace=j;          //saving the place of the lowest value
            }
        }
        //swap lowest value with the most left value we can
        let temp=array[minPlace];
        array[minPlace]=array[i];
        array[i]=temp;
    }
    return array;
}


var unSorted=[6,5,3,1,8,7,2,4];
var sorted=selectionSort(unSorted);
console.log(`Sorted with Selection Sort: ${sorted}`);

var unSorted=[6,2,3,1,-8,7,2,4];
var sorted=bubbleSort(unSorted);
console.log(`Sorted with Bubble Sort: ${sorted}`);