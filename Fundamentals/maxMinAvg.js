function maxMinAvg(array)
{
    if(array.length <= 1)
    {
        return "Array needs to have at least 2 value in it"
    }
    var max=array[0];
    var min=array[0];
    var sum=array[0];
      
    for(var i=1; i<array.length; i++)
    {
        if(array[i] > max)
        {
            max=array[i];
        }
        if(array[i] < min)
        {
            min=array[i];
        }
        sum+=array[i];
    }
    return `The max of the array is ${max}, The min of the array is ${min}, and the average of the array is ${sum/array.length}`;
}

console.log(maxMinAvg([1, -2, 9, 4]));