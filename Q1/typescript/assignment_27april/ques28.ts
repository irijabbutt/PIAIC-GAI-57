// 28- Develop a function that converts an array of Fahrenheit temperatures to Celsius and logs the new temperatures.
function temperature1(arr: number[])
{
    console.log("Fahrenheit Temperatures");
    for (let i = 0; i < arr.length; i++)
    {
        console.log(`${arr[i]}°F`);
    }
    console.log("\nCelcius Temperatures");
    for (let i = 0; i < arr.length; i++)
    {
        let celsius = (arr[i] - 32) * 5 / 9;
        console.log(`${celsius}°C`);
        }
}
temperature1([100, 200, 300, 400, 500]);
