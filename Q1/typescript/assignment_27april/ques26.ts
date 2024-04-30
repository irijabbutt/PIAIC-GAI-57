// 26- Create a function isSorted that checks if an array is sorted in ascending order.

function isSorted(arr:number[]){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arr[i+1]){
            return console.log(`iS [${arr}] sorted?\t${false}`); 
        }
    }
    return console.log(`IS [${arr}] sorted?\t${true}`);
}
console.log(isSorted([1,2,3,4,5,9,6,8,7,10])); 