// Task: Build a webpage with a button. 
// When the button is clicked, change the background color of the webpage to a random color. 
// Add a text element that displays the new background color.
// Add event listener to the button
document.querySelector('.change').addEventListener('click', function() {
  // Generate a random color in the format #RRGGBB
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;

  // Change the background color of the body
  document.body.style.backgroundColor = randomColor;

  // Display the new background color in the paragraph
  document.querySelector('.color').textContent = `Background color: ${randomColor}`;
});
