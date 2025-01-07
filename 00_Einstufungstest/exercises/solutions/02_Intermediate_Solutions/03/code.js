// Task: Write a JavaScript function that takes a user's name as input and returns a greeting message using the name. 
// For example, if the user inputs "Alice," the function should return "Hello, Alice!".
// Add event listener to the form to handle submission
document.querySelector('.userInput').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from refreshing the page

  // Get the user's name from the input field
  const username = document.getElementById('username').value.trim();

  // Check if the input is not empty
  if (username) {
      // Display the greeting message
      document.querySelector('.result').textContent = `Hello, ${username}!`;
  } else {
      // Display a message for empty input
      document.querySelector('.result').textContent = "Please enter your name.";
  }
});
