function fizzBuzz(n)
{
    var type=typeof(n)
    var s="";

    if(type !== "number" || n<0) 
    {
        //console.log("Parameter must be a positive number");
        return ("Parameter must be a positive number");
    }
    
    for (var i=1; i<=n; i++)
    {
        if (i % 3 == 0 && i % 5 == 0)
        {
            s+="FizzBuzz";
            //console.log("FizzBuzz ");
        }
        else if (i % 3 == 0 && i % 5 !==0)
        {
            s+="Fizz";
            //console.log("Fizz ")
        }
        else if (i % 5 == 0)
        {
            s+="Buzz";
            //console.log("Buzz ")
        }
        else
        {
            s+=i;
            //console.log(`${i} `)
        }
        if(i<n)
        {
            s+=", "
        }
    }
    return s;
}

console.log(fizzBuzz(15));