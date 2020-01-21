function bubbleSort(n)
{
    var temp;
    for(var i=0; i< n.length; i++)
    {
        if(n[i]>n[i+1])
        {
            temp=n[i];
            n[i]=n[i+1];
            n[i+1]=temp;
        }
    }

}

bubbleSort([5,2,3,6,1]);