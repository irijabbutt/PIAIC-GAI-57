// 25- Develop a function countOccurrences that counts how many times a specific element appears in an array.
function countOccurrences(arr: any[], value: any)
{
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            count++;
        }
    }
    return console.log(`Occurence of '${value}' in [${arr}] is:\t${count}`);
    ;
}
countOccurrences([1,2,4,5,2,4,6,3,"a","a","a"],"a")