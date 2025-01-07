// Task: Create a program that asks the user to enter their age. Using conditional statements, check if the age is greater than or equal to 18. 
// If it is, display a message saying "You are an adult," otherwise, display "You are a minor."

document.querySelector('#check-age-button').addEventListener('click', function() {
  // Get the value of the input field with id 'user-age'
  const age = parseInt(document.querySelector('#user-age').value);

  // Check if the age is greater than or equal to 18
  if (!isNaN(age)) {
      if (age >= 18) {
          console.log("You are an adult.");
      } else {
          console.log("You are a minor.");
      }
  } else {
      console.log("Please enter a valid age.");
  }
});
