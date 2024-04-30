// 22- Develop a function filterByLength that takes an array of strings and a number n. The function should return an array containing only the strings that are longer than n characters.
function filterByLength(arr: string[],n:number)
{
return console.log(arr.filter(item => item.length > n));
}
filterByLength(["rijab","is","22 years","old"],3)