// favoriteNumber.js

// Declare a variable for the favorite number
let favoriteNumber = 7; // Replace with the user's favorite number
let guess; // Variable to store the user's guess

// Use a while loop to prompt the user until they guess correctly
while (true) { // Loop indefinitely until the correct guess is made
    guess = parseInt(prompt("Guess my favorite number:")); // Prompt user for a guess

    // Check if the guess is correct
    if (guess > favoriteNumber) {
        console.log("Your guess is too high. Try again.");
    } else if (guess < favoriteNumber) {
        console.log("Your guess is too low. Try again.");
    } else {
        console.log("Correct! You guessed my favorite number.");
        break; // Exit the loop if the guess is correct
    }
}
