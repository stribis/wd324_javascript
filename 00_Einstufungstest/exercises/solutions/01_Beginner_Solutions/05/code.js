// Task: Build an HTML page with a button and an empty paragraph element. 
// Using JavaScript, add an event listener to the button so that when it is clicked, the paragraph element displays the text "Hello, World!" 
// Then, add another button that, when clicked, clears the text from the paragraph.
// Add event listener to display "Hello, World!" when the first button is clicked
document.getElementById('show-message-button').addEventListener('click', function() {
  document.getElementById('message-paragraph').textContent = "Hello, World!";
});

// Add event listener to clear the text when the second button is clicked
document.getElementById('clear-message-button').addEventListener('click', function() {
  document.getElementById('message-paragraph').textContent = "";
});
