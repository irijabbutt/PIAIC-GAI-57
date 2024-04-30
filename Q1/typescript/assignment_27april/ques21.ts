// 21- Write a function calculateProduct that takes an array of numbers and returns the product of all elements.
function calculateProduct(arr: number[])
{
    let product = 1
    for (let i = 0; i < arr.length; i++)
    {
        product=product*arr[i]
    }
    return console.log(`Product of numbers in array [${arr}] is:\t${product}`);
}
calculateProduct([1,2,3,4,5])