// 10- Write a function that takes an array of numbers and returns the count of positive numbers in the array.

function numbers(arr:number[])
{
    console.log("Positive numbers in array:\t");
    let count=0
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] > 0)
        {
            count=i+1
        }
        
    }
    return console.log(count);
}
numbers([1,-2,4,-5,7,10,-20])