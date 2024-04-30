// 7- Write a loop that logs numbers from 1 to 50. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz".
for (let i = 1; i <= 50; i++)
{
    if (i % 3 == 0)
    {
        console.log(i,"Fizz");
        
    }
    else if(i%5==0)
    {
        console.log(i,"Buzz");
        
    }
    else
    {
        console.log(i)
        }
    }

