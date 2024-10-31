// favoriteNumber.js

const prompt = require('prompt-sync')(); // Import prompt-sync

// Declare a variable that will hold the favorite number
const favoriteNumber = 7; // Set your favorite number here

let guess; // Initialize a variable to store the user's guess

// Use a while loop to keep asking for the user's guess until they guess correctly
while (true) {
    guess = prompt('Guess your favorite number: '); // Prompt user for a guess
    guess = Number(guess); // Convert the input to a number

    if (guess > favoriteNumber) {
        console.log('Your guess is too high!');
    } else if (guess < favoriteNumber) {
        console.log('Your guess is too low!');
    } else {
        console.log('Correct! Your favorite number is ' + favoriteNumber);
        break; // Exit the loop if the guess is correct
    }
}
