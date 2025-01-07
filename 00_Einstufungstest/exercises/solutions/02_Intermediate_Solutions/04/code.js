// Task: Create a program that prompts the user to enter a number. 
// Check if the number is positive, negative, or zero, and display an appropriate message.
// Add event listener to the form
document.querySelector('.numberCheckForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission and page refresh

  // Get the user's input value
  const number = parseFloat(document.getElementById('numberInput').value);

  // Check the number and display the appropriate message
  const resultMessage = document.querySelector('.resultMessage');

  if (isNaN(number)) {
      resultMessage.textContent = "Please enter a valid number.";
  } else if (number > 0) {
      resultMessage.textContent = "The number is positive.";
  } else if (number < 0) {
      resultMessage.textContent = "The number is negative.";
  } else {
      resultMessage.textContent = "The number is zero.";
  }
});
