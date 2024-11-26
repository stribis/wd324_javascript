/* Task 1:
    Given an array of strings ["apple", "banana", "cherry", "date"], write a loop to print each element of the array.

    i++ ==
    i = i + 1;
 */

let fruits = ["apple", "banana", "cherry", "date"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

/* Task 2:
    Given an array of numbers [12, 45, 2, 67, 34, 89, 4], write a loop to find and print the largest number in the array.
*/

/* Task 3:
    Write a loop that iterates through the numbers from 1 to 20 and prints only the odd numbers.
 */

/*  Task 4 (for the fast guys)
    Write a loop to count the number of vowels (a, e, i, o, u) in a given string.
    For example, in the string "Hello World", the result should be 3.
 */