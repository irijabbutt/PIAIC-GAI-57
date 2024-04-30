// 14- Write a JavaScript function that accepts an array and reverses its elements without using the .reverse() method. Log the result.
function reverseArray(arr: string[])
{
    console.log("original array:\n", arr)
    console.log("\nReversed array:");
    
    for (let i = arr.length - 1; i >= 0; i--)
    {
        console.log(arr[i]);
    }
}
reverseArray(["asd","1234","dfg","r12"])