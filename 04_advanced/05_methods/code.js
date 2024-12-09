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
console.log(resultMapArray); // returns a new array

console.clear();
