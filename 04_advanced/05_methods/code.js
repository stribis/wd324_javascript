const scores = [10, 30, 15, 25, 50, 40, 5, 20, 10, 30, 15, 25, 50, 40, 5, 20];

/*
 FILTER METHOD:
 The filter method creates a new array with all elements
 that pass the implemented filter function.
 It fires a callback function for each element in the array.
 In this example the callback function returns always a boolean value (true or false).
 If it's true, the element is added to the new array.
 If it's false, the element is not added to the new array.
 IMPORTANT: NEVER filter with the false condition (e.g., return false)
*/

// we filter all scores that are bigger than 20 and smaller than 40
const filteredScores = scores.filter((score) => score > 20 && score < 40);
console.log("filteredScores: ", filteredScores);

console.clear();

/* FILTER METHOD WITH AN ARRAY OF OBJECTS */
const users = [
  { name: "Shaun", premium: true },
  { name: "Yoshi", premium: false },
  { name: "Mario", premium: false },
  { name: "Chun-Li", premium: true },
  { name: "Luigi", premium: true },
  { name: "Toad", premium: false },
  { name: "Bowser", premium: true },
];

// we filter all users, that have a premium account
// since we always filter according to TRUE, the array will
// only contain users that have a premium account
const premiumUsers = users.filter((user) => user.premium);
console.log("premiumUsers: ", premiumUsers);

// Exercise 1: Filter the scores that are smaller/equal to 15
const scoreLessThan15 = scores.filter((score) => score <= 15);
console.log(scoreLessThan15);

// Exercise 2: Filter the users, that are not premium
const nonPremiumUsers = users.filter((user) => !user.premium);
console.log(nonPremiumUsers);

// Exercise 3: Filter the user, that are not premium and their names are longer
// then 4 characters
const NonPremiumUsersLongNames = users.filter((user) => !user.premium && user.name.length > 4);
console.log(NonPremiumUsersLongNames);

console.clear();

/*
    MAP METHOD
    The map methot always creates a new array
    it fires a callback function for each element in the array
    The callback function always returns a new element (or value)
    The new element will be added to the new array
    the map method doesn't change the original array
*/

const salePrices = filteredScores.map((score) => score / 2);
console.log("salePrices: ", salePrices);

console.clear();

const products = [
  { name: "gold star", price: 20 },
  { name: "mushroom", price: 40 },
  { name: "green shells", price: 30 },
  { name: "banana skin", price: 10 },
  { name: "red shells", price: 50 },
  { name: "blue shells", price: 60 },
  { name: "star", price: 70 },
  { name: "bullet bill", price: 80 },
  { name: "lightning bolt", price: 90 },
  { name: "blooper", price: 100 },
];

// we create a new array, which halves the price of each product
// if the price is bigger than 30,
// return the product

const salesProducts = products.map((product) => {
  if (product.price > 30) {
    // create a new object with the product name and the new price
    return { name: product.name, price: product.price / 2 };
  } else {
    return product;
  }
});

console.log("salesProducts: ", salesProducts);

console.clear();

/*
    EXERCISE:
    Here you see an array of objects that contain students and their marks
    Create a new array, that only contains the name of the students
    that have a higher or equal mark than 50 (map-method)
    the new array should only contain the student names,
    which are NOT null (filter-method)
*/
const students = [
  { name: "Alice", grade: 45 },
  { name: "Bob", grade: 85 },
  { name: "Charlie", grade: 50 },
  { name: "Dave", grade: 30 },
  { name: null, grade: 100 },
  { name: "Eve", grade: 95 },
  { name: "Frank", grade: 20 },
  { name: "Grace", grade: 55 },
  { name: "Heidi", grade: 65 },
  { name: "Ivan", grade: 75 },
  { name: null, grade: 75 },
  { name: "Judy", grade: 40 },
];

const passedStudents = students
  .map((student) => {
    if (student.grade >= 50) {
      return { name: student.name };
    }
  })
  .filter((student) => student !== undefined && student.name !== null);

console.log(passedStudents);

const shortcut = students.filter((student) => student.grade >= 50 && student.name !== null);
console.log(shortcut);

console.clear();

/*
## map
- creates a new array
- returns the new array
- doesn't change the original array
- use case: transforming data and save into a new variable, without changing the original array

## forEach
- forEach doesn't return a new array, it returns an undefined
- it doesn't change the original array
- use case: iteration through an array, WITHOUT processing the data inside the array
*/

// forEach doesn't copy an array
const originalArray = [1, 2, 3, 4, 5];
const resultArray = originalArray.forEach((element) => element * 2);

console.log(originalArray); // is still the original
console.log(resultArray); // always returns an undefined, data can't be processed any further

// map copies an array
const resultMapArray = originalArray.map((element) => element * 2);

console.log(originalArray); // is still the original
console.log(resultMapArray); // returns a new array -> [2, 4, 6, 8, 10]

console.clear();

/*
REST PARAMETER

The REST parameter allows us to define an unfedined amount of arguments in an array
This is very helpful, when we don't know, how many paramenters we'll get
The REST parameter collects every other argument in an array
The REST parameter is always the last argument in the function

SYNTAX:
function funnctionName(param1, param2, ...rest){
  code to execute
}
*/

// Example 1
// We know, that we'll get at least 2 arguments
function sum(a, b, ...rest) {
  // we count the sum of a and b
  let total = a + b;

  // now we can iterate through the rest arguments
  for (let num of rest) {
    // addition of the rest arguments
    total += num;
  }

  return total;
}

console.log(sum(1, 2)); // logs: 3
console.log(sum(3, 4, 5, 6, 7)); // logs: 25
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // logs: 55

// Example 2

function stringConcat(string, ...blablablub) {
  console.log(blablablub);
  let result = string;
  for (let str of blablablub) {
    result += str;
  }
  return result;
}

console.log(stringConcat("Hello", " ", "World")); // logs: Hello World
console.log(stringConcat("Hello", " ", "World", " ", "I", " ", "am", " ", "a", " ", "programmer")); // logs: Hello World I am a programmer

console.clear();

/*
 SPREAD OPERATOR
 The spread operator allows us to pass an array as an argument, or to deconstruct an object into individual variables
 It is helpful when we want to pass an array or an object as an argument to a function
 Or to copy something into a new variable

 SYNTAX:
 const newArray = [...oldArray]
 const newObject = {...oldObject}
*/

// Example 1, combining of array
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = ["Hello World", ...array1, "This is cool", ...array2];
// What actually happens, it copies the values inside of the array
// and adds them into the new array:
const combinedArrayHappening = ["Hello World", 1, 2, 3, "This is cool", 4, 5, 6];

console.log(combinedArray);
console.log(combinedArrayHappening);

// Example 2, copy of arrays
const originalArraySpread = [1, 2, 3];
const copiedArray = [...originalArraySpread];
// What happens here is, it copies the original values into a new array
// We never actually want to modify the original array, that's why we use the spread operator to copy the values
// Now we can modify the copied array
copiedArray.push(4);

console.log(copiedArray); // logs: [1, 2, 3, 4]

// Example 3, combining of objects
const object1 = { firstname: "Shaun", lastname: "White", age: 35 };
const object2 = { job: "Professional Snowboareder", country: "USA" };

const combinedObject = { ...object1, ...object2 };
console.log(combinedObject);

// Example 4, copying of objects into arrays
const people = [
  {
    firstname: "Max",
    lastname: "Mustermann",
    age: 24,
    job: "Software Engineer",
    country: "Germany",
  },
  {
    firstname: "Jane",
    lastname: "Doe",
    age: 27,
    job: "CTO",
    country: "Switzerland",
  },
];

// we are also able to copy the values into an array with the help of the spread operator
const peopleArray = [...people, combinedObject];

console.log(peopleArray);
