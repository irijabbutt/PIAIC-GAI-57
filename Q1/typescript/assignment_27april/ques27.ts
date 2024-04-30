// 27- Write a function that receives an array of names and formats them into a string separated by commas, except for the last two names, which should be separated by "and".

function names_format(arr: String[])
{
    let str: String = "";

    for(let i = 0; i < arr.length; i++)
    {
        if(i == arr.length - 1)
        {
            str += " and " + arr[i];
        }
        else if(i == arr.length - 2)
        {
            str += "and "+arr[i];
        }
        else
        {
            str += arr[i] + ", ";
        }
    }

    return str;
}

console.log(names_format(["sara", "nimra", "tango", "brownie"]));