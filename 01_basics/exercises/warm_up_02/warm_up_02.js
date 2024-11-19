// Step 1: Define a magic number
const magicNumber = 15;

// Step 2: Create a function to check the guess
function checkGuess(guess) {
    if (guess === magicNumber) {
        return "Congratulations! You've guessed the magic number!";
    } else if (guess > magicNumber) {
        return "Your guess is too high. Try again!";
    } else {
        return "Your guess is too low. Try again!";
    }
}

// Step 3: Start the guessing game
let attempts = 0;
let userGuess = null;

// Step 4: While loop to keep asking until correct guess
while (userGuess !== magicNumber) {
    // Ask the user for a guess (using prompt for browser or other method in Node.js)
    userGuess = parseInt(prompt("Guess the magic number (between 1 and 20):"), 10);

    // *** Ensure it's a valid number (handle non-numeric input)
    if (isNaN(userGuess)) {
        alert("Please enter a valid number.");
        continue;  // Skip this iteration and ask again
    }

    attempts++;  // Increment the number of attempts

    // Step 5: Use the function to check the guess
    const result = checkGuess(userGuess);
    alert(result);
}

// Step 6: After guessing the magic number, print how many attempts it took
alert(`You guessed the magic number in ${attempts} attempts!`);