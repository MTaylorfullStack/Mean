function bracesValid(s)
{
   var array=[0,0,0];

   for(var i=0; i<s.length; i++)
   {
       if(s[i] == "(")
       {
           array[0]++;
       }
       else if(s[i] == "{")
       {
           array[1]++;
       }
       else if(s[i] == "[")
       {
           array[2]++;
       }
       else if(s[i] == ")")
       {
           array[0]--;
       }
       else if(s[i] == "}")
       {
           array[1]--;
       }
       else if(s[i] == "]")
       {
            array[2]--;
       }
       if(array.includes(-1))  
       {
           return false;
       }
   }
   if(array[0] == 0 && array[1] == 0 && array[2] == 0)
   {
       return true
   }
   return false
}
console.log(bracesValid("{()}}[]"))