// 29- Write a function minMaxAverage that takes an array of numbers and returns an object with properties for the minimum, maximum, and average of those numbers.
function minMaxAverage(arr:number[]) {   
    let min = arr[0];
    let max = arr[0];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
        sum += arr[i];
    }
    let average = sum / arr.length;

    return {
        min: min,
        max: max,
        average: average
    }
}
console.log(minMaxAverage([1,-3,5,12,-4,7,9]))