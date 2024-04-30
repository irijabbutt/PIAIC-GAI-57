// 20- Write a function to find and return the smallest number in an array of integers.
function smallest_Number(arr: number[])
{
    let element: number = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (element > arr[i]) {
            element=arr[i];
        }
    }
    return console.log(`Smallest number in array [${arr}] is:\t ${element}`);
    
}
smallest_Number([1,6,-2,10,14,-3]);