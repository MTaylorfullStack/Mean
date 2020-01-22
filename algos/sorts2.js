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
function insertionSort(array)
{
    //1. check and see if number to the left is bigger
    //2. check all previous values to see if they're bigger or smaller
        //if they're bigger, shift that number to the right and keep moving to the left
        //if one is smaller place number in front of that spot
    
    
    for(var i=0; i< array.length; i++)
    {
        if(i !=0 && array[i-1]>array[i]) //if the next number is smaller then the current number
        {
            var currentNum=array[i]
            for(var j=i-1; j>=0; j--)
            {
                
                if(array[j]>currentNum)
                {
                    array[j+1]=array[j]
                }
                else
                {
                    array[j+1]=currentNum;
                    break;
                }
            }
            array[j+1]=currentNum;
        }
    }
    return array
}

var unSorted=[7,8,5,2,4,6,3];
// var sorted=selectionSort(unSorted);
// console.log(`Sorted with Selection Sort: ${sorted}`);

// var unSorted=[6,2,3,1,-8,7,2,4];
// var sorted=bubbleSort(unSorted);
// console.log(`Sorted with Bubble Sort: ${sorted}`);
console.log(insertionSort(unSorted));
