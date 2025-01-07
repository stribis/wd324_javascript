// Task: Create a program that generates a random list of 10 integers within a specific range (e.g., 1 to 100) and stores them in an array. 
// Find and display the sum, average, and product of the elements. 
// Additionally, implement a way to identify and display the largest and smallest numbers in the array.

// Function to generate a random integer within a range
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate an array of 10 random integers between 1 and 100
const numbers = Array.from({ length: 10 }, () => getRandomInt(1, 100));
console.log("Generated Numbers:", numbers);

// Calculate the sum
const sum = numbers.reduce((acc, num) => acc + num, 0);

// Calculate the average
const average = sum / numbers.length;

// Calculate the product
const product = numbers.reduce((acc, num) => acc * num, 1);

// Find the largest and smallest numbers
const largest = Math.max(...numbers);
const smallest = Math.min(...numbers);

// Display the results
console.log("Sum:", sum);
console.log("Average:", average);
console.log("Product:", product);
console.log("Largest Number:", largest);
console.log("Smallest Number:", smallest);
