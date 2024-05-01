// 31- Develop a function that takes two inputs, a string and a character, and returns the number of times the character appears in the string.
function countChar(arr:string, char:string) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === char) {
            count++;
        }
    }
    return count;
}

console.log(countChar("hello", "l"));