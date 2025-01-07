// Task: Create an array of numbers. Write a loop to find and display the largest number in the array. 
// Additionally, write another loop to calculate the sum of all the numbers in the array.

// Array of numbers
const numbers = [15, 42, 8, 33, 27, 56, 19];

// Finding the largest number in the array
let largest = numbers[0]; // Start with the first number
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log("The largest number is:", largest);

// Calculating the sum of all the numbers in the array
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("The sum of all numbers is:", sum);
