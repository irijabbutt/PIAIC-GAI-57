// 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write
//     because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence
//     describing what the program does.
// Program 1: Guessing Game
/*
Author: Rijab Butt
Date: 22-06-2024
This program is a simple guessing game where the user has to guess a number between 1 and
100. The program will tell the user if their guess is higher or lower than the correct
number.
*/
const prompt =import ("inquirer");
let secretNumber = Math.floor(Math.random() * 100) + 1;
let guess: string | number;

while (true) {
  const userInput = await inquirer.prompt(["Guess a number between 1 and 100"]);
  if (userInput === null) {
    alert("Invalid input. Please try again.");
    continue;
  }
  guess = parseInt(userInput, 10);
  if (isNaN(guess)) {
    alert("Invalid input. Please enter a number.");
    continue;
  }
  // Now, guess is a valid number
  if (guess === secretNumber) {
    alert("Congratulations! You guessed the correct number.");
    break;
  } else if (guess < secretNumber) {
    alert("Your guess is too low. Try again.");
  } else {
    alert("Your guess is too high. Try again.");
  }
}

// If the user guesses the correct number, display a congratulatory message
alert("Congratulations! You guessed the correct number.");