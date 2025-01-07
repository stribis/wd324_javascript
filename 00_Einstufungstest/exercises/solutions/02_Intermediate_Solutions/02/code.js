// Task: Given an array of numbers, write a program that finds and displays the sum of all even numbers and the product of all odd numbers in the array.
// Array of numbers
const numbers = [2, 3, 4, 5, 6, 7];

// Variables to store the sum of even numbers and product of odd numbers
let sumEven = 0;
let productOdd = 1;

// Loop through the array
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        // Add to sum if the number is even
        sumEven += numbers[i];
    } else {
        // Multiply to product if the number is odd
        productOdd *= numbers[i];
    }
}

// Display the results
console.log("Sum of even numbers:", sumEven);
console.log("Product of odd numbers:", productOdd);
