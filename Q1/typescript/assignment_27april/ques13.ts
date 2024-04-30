// 13- Develop a function that takes an array of numbers and returns a new array with each number squared.
function square(arr: number[])
{
    console.log("original array:\n",arr);
    let sqr_arr = [];
    let n=arr.length
    console.log("\nSquared array:\n");
    for (let i = 0; i < n;i++)
    {
        sqr_arr[i] = arr[i] * arr[i]
    }
    return console.log(sqr_arr); 
}
square([3,2,6,12,7,23,1])