// 1. Data Types and Operators

// Example: Define your variables here
let name = "John"; // string
let price = 25; // number
let isStudent = true; // boolean
let notDefined = undefined; // undefined
let emptyValue = null; // null

// Log their types
console.log(`type: ${typeof name}", value: ${name}`); // Output?
console.log(`type: ${typeof price}", value: ${price}`); // Output?
console.log(`type: ${typeof isStudent}", value: ${isStudent}`); // Output?
console.log(`type: ${typeof notDefined}", value: ${notDefined}`); // Output?
console.log(`type: ${typeof emptyValue}", value: ${emptyValue}`); // Output?

// 2: Arithmetic Operators

// Define two numbers
let num1 = 10;
let num2 = 5;

// Perform operations
console.log(num1 + num2); // Addition
console.log(num1 - num2); // Subtraction
console.log(num1 * num2); // Multiplication
console.log(num1 / num2); // Division
console.log(num1 % num2); // 

// 3. String Concatenation

let firstName = "Jane";
let lastName = "Doe";

// Combine strings
let fullName = firstName + " " + lastName;
console.log(fullName); // Output?


// Exercise 4. Conditionals (Control Flow, If-Else)
let age = 20; // Try changing this value

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}


// Exercise 5: Odd or Even

let number = 7; // Try changing this value

if (number % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }

// Exercise 6. Grading System

let score = 85; // Try changing this value

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// Exercise 7. Add Two Numbers

function addNumbers(a, b) {
    return a + b;
  }
  
  // Test the function
  console.log(addNumbers(5, 3)); // Output?

// Exercise 8. Greet a Person

  function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  // Test the function
  greet("Alice"); // Output?

// Exercise 9. Multiply by 2

    function multiplyByTwo(num) {
        return num * 2;
    }
  
  // Test the function
  console.log(multiplyByTwo(4)); // Output?

// Exercise 10. Change Text

// requires an index.html
document.getElementById("text").textContent = "Text has been changed!";


// Exercise 11. Multiply by 2
// requires an index.html
document.getElementById("myButton").addEventListener("click", function () {
    this.textContent = "Clicked!";
});

// Exercise 12. Multiply by 2
// requires an index.html
let list = document.getElementById("myList");
let newItem = document.createElement("li");
newItem.textContent = "New Item";
list.appendChild(newItem);

// *************************

