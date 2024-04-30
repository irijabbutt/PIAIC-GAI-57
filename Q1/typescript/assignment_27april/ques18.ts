// 18- Develop a function called sumOfElements that calculates the sum of all elements in an array that are either even or odd, based on a parameter.
function sumOfElements(arr: number[])
{
    let sum = 0;
    for (let i = 0; i < arr.length; i++) 
    {
        sum=sum+arr[i]
    }
    return console.log(`Sum of elements of array [${arr}] is:`,sum);
    
}
sumOfElements([1,4,-2,8,34,-26,19,12])