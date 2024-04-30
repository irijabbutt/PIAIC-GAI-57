//  30- Create a function swapElements that swaps two specified indices in an array.
function swapElements(arr: number[], index1: number, index2: number) {
    console.log(`Before swapping: ${arr}`);
    
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

    return console.log(`After swapping: ${arr}`);
}

console.log(swapElements([1, 2, 3, 4, 5], 1, 3));