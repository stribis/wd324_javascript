// Task: Create a JavaScript program that calculates the area and perimeter of a rectangle. 
// Ask the user to enter the length and width as input, and then display both the area and perimeter.
// Add event listener to the form to handle submission
document.querySelector('.userInputs').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from refreshing the page

  // Get the input values for width and length
  const width = parseFloat(document.getElementById('width').value);
  const length = parseFloat(document.getElementById('length').value);

  // Check if the inputs are valid numbers
  if (isNaN(width) || isNaN(length) || width <= 0 || length <= 0) {
      document.querySelector('.result').textContent = "Please enter valid positive numbers for both width and length.";
      return;
  }

  // Calculate area and perimeter
  const area = width * length;
  const perimeter = 2 * (width + length);

  // Display the results
  document.querySelector('.result').textContent = 
      `Area: ${area} cm², Perimeter: ${perimeter} cm.`;
});
