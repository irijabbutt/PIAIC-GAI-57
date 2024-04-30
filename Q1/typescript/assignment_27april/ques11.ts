// 11- Write a function that takes an array of words and returns a new array containing only the words that start with the letter 'a'.

function words(arr: string[])
{
    console.log("words start with a:\t");
    
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i].charAt(0) == "a") // checks words starts with 'a'
        {
            console.log(arr[i]);
            
        }
}
}
words(["asjis","fdfdsd","desddf","a3esd","weedd","awxss"])