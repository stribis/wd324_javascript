// // 1. Basic Function Exercise: Write a function that takes two numbers and returns their sum.
// console.log("Task 1:")
//
// console.log("Task 1, Option 1:");
// // Option 1:
// function sum1(a, b) {
//     return a + b;
// }
// const result1 = sum1(4, 6);
// console.log(result1);
//
// console.log("Task 1, Option 2:");
// // Option 2:
// const sum2 = function(a, b) {
//     return a + b;
// }
// const result2 = sum2(4, 6);
// console.log(result2);
//
// console.log("Task 1, Option 3:");
// // Option 3:
// const sum3 = (a, b) => a + b;
// console.log(sum3(4,6));
//
// console.log("Task 1, Option 4:");
// // Option 4:
// console.log((a = 4, b = 6) => a + b);
//
//
// // 2. Array Manipulation Exercise: Write a function that takes an array of numbers and returns the sum of all elements.
// const array1 = [1,2,3,4,5,6,7,8,9,10];
// const array2 = [1,3,1,5,6,1,6,1,2];
//
// // Option 1:
// console.log("Task 2, Option 1:");
// function arraySum1(array) {
//     let result = 0;
//     for (let i = 0; i < array.length; i++) {
//         result += array[i];
//     }
//     return result;
// }
// const resultT2O1 = arraySum1(array1);
// console.log(resultT2O1);
//
// // Option 2:
// console.log("Task 2, Option 1:");
// function arraySum2(array) {
//     let i = 0;
//     while (i < array.length) {
//         console.log(array[i]);
//         i++;
//     }
//     return result;
// }
// const resultT2O2 = arraySum1(array1);
// console.log(resultT2O2);
//
// // Option 3:
// console.log("Task 2, Option 3:");
// function arraySum3(array) {
//     let result = 0;
//     array.forEach(element => result += element);
//     return result;
// }
// const resultT2O3 = arraySum3(array1);
// console.log(resultT2O3);
//
// // Option 4:
// console.log("Task 2, Option 4:");
// function arraySum4(array) {
//     return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// }
// const resultT2O4 = arraySum4(array1);
// console.log(resultT2O4);
//
//
// // 3. Higher-Order Function Exercise: Write a higher-order function that takes a function as an argument and calls it with different parameters.
//
// // Higher-order function that takes another function as an argument
// function processNumbers(numbers, operation) {
//     return numbers.map(operation);
// }
//
// // Operation 1: Doubling the number
// function double(num) {
//     return num * 2;
// }
//
// // Operation 2: Squaring the number
// function square(num) {
//     return num * num;
// }
//
// // Array of numbers
// const nums = [1, 2, 3, 4, 5];
//
// // Using the higher-order function with different operations
// console.log(processNumbers(nums, double));  // [2, 4, 6, 8, 10]
// console.log(processNumbers(nums, square));  // [1, 4, 9, 16, 25]