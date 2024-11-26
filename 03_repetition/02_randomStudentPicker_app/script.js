// Array of student names
const students = [
  "Sophia", "Vanja", "Mirjam", "Noa", "Remo", 
  "Selina", "Levin", "Aldous"
];

const dice = document.querySelector("#dice");
const diceFront = document.querySelector(".dice__face--front");
const studentDisplay = document.querySelector("#student-name");
const btn = document.getElementById("rollButton");

// Function to roll the dice
function rollDice() {
  // Reset the result on the screen
  diceFront.classList.remove('result');
  diceFront.innerText = "?";
  studentDisplay.textContent = "Click the button to pick a student";

  // Spinning Start
  studentDisplay.textContent = "Rolling...";
  // Add the spinning class to start the CSS animation
  dice.classList.add("dice--spinning");

  // Stop spinning and show the result after 1 seconds
  setTimeout(() => {
    dice.classList.remove("dice--spinning"); // Stop the animation
      // Select a random student and display their name
      const selectedStudent = students[Math.floor(Math.random() * students.length)];
      studentDisplay.textContent = `Winner: ${selectedStudent}!`;
      diceFront.innerHTML = "&#129395;";
      diceFront.classList.add('result');
  }, 1500); // Spin duration of 1 seconds
}

// Event listener for the button
btn.addEventListener("click", rollDice);