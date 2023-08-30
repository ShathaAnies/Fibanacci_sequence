var a=[]
var input =prompt("enter the length of array:")


function Positive(input)
{
    if (input>0)
        return true
    
    else
        return false
}

function List( input)
{
    if (Positive(input))
    {
        if (input==1)
        {
            a=[0]
        }
        else if (input==2)
        {
            a=[0,1]
        }
        else if (input>2)
        {
            a=[0,1]
            while (a.length< input){
            var num1=a[a.length-1]
            var num2=a[a.length-2]
            a.push (num1+num2)
            }
            return a
        }
    }
    else 
    {
        alert("Please enter positive number")
    }
}
alert(List( input))