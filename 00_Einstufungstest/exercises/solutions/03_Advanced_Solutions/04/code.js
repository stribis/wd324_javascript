// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Track the number of attempts
let attempts = 0;

// Add an event listener to the form
document.querySelector('.guessGame').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission and page refresh

    // Get the user's guess from the input field
    const userGuess = parseInt(document.getElementById('guess').value, 10);
    attempts++; // Increment attempts

    // Check the guess and provide hints
    const hintElement = document.querySelector('.hint');
    const attemptsElement = document.querySelector('.attempts');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        hintElement.textContent = "Please enter a valid number between 1 and 100.";
    } else if (userGuess < randomNumber) {
        hintElement.textContent = "Too low. Try again!";
    } else if (userGuess > randomNumber) {
        hintElement.textContent = "Too high. Try again!";
    } else {
        hintElement.textContent = `Congratulations! You guessed it right. The number was ${randomNumber}.`;
        attemptsElement.textContent = `It took you ${attempts} attempts.`;
        // Optionally, disable the form after correct guess
        document.querySelector('.guessGame').querySelector('button').disabled = true;
    }
});
