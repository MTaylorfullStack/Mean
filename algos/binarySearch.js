function rBinarySearch(array,n)
{
    current_num=array[Math.floor(array.length/2)];
    if(array.length==0)
        return false
    else
    {
        if(current_num==n)
        {
            return true;
        }
        else if(current_num>n)
        {
            var newArray=array.slice(current_num+1,array.length-1);
            rBinarySearch(newArray,n);
        }
        else if(current_num<n)
        {
            var newArray=array.slice(0,current_num-1);
        }
    }
}

console.log(rBinarySearch([1,2,3,4,5], 5));