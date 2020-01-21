//arr=[1,2,3,4,5]  5
arr=[1]
arr=[4,5]

function rBinarySearch(array,n)
{
    current_num=array[Math.floor(array.length/2)];

    if(current_num > n)
    {
        var new_array=array.slice(0,Math.floor(array.length/2)-1);
        return rBinarySearch(new_array,n);
    }
    else if(current_num < n)
    {
        var new_array=array.slice(Math.floor(array.length/2)+1,array.length);
        return rBinarySearch(new_array,n);
    }
    else if(current_num == n)
    {
        return true;
    }
    return false
    
}
console.log(rBinarySearch([4,5,6,7,8,9,10], 11));