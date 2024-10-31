// colorPreferences.js

// Create an array to store three colors
let colors = [];

// Initialize the array with three colors using prompt
for (let i = 0; i < 3; i++) {
    let color = prompt(`Enter your favorite color #${i + 1}:`); // Prompt user for a color
    colors.push(color); // Add the color to the array
}

// Log the initial colors
console.log("Your favorite colors are: " + colors.join(", "));

// Use prompt to allow the user to add a new color
let newColor = prompt("Enter a new color to add to your favorites:");
colors.push(newColor); // Add the new color to the array

// Log the updated list of colors
console.log("Updated favorite colors: " + colors.join(", "));
