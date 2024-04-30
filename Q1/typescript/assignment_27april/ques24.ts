// 24- Write a function incrementAll that takes an array of integers and increments each element by one.
function incrementAll(arr: number[])
{
    let result=[0]
    for (let i = 0; i < arr.length; i++)
    {
        result[i]= arr[i] + 1
    }
    return console.log(result);
}
incrementAll([1, 2, 3, 4, 5])