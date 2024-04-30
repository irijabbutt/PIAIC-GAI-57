// 12- Create a script that logs the second to last element of an array named fruits.

function fruits(arr: string[])
{
    for (let i = 1; i < arr.length; i++) {
        console.log(`${arr[i]}`);
    }
}
fruits(["apple","mangoes","oranges","banana","grapes"])