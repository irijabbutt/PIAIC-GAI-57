// 35- Write a script that simulates a basic calculator. It should take two operands and an operator ('+', '-', '*', '/') from the user, perform the operation, and log the result.
function calculator(num1:number, num2:number, operator:string) {
    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;

    } else if (operator === '*') {
        return num1 * num2;

    } else if (operator === '/') {
        return num1 / num2;

    } else {
        return 'Invalid operator';
    }
}

console.log(calculator(10, 2, '+'));