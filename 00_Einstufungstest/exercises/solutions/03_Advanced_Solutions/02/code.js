// Task: Given an array of objects with properties like name, age, and country, write a JavaScript program that sorts the array based on age in descending order. 
// Then, filter the array to extract and display the names of people aged 30 or older.
// Sample array of objects
const people = [
  { name: "Alice", age: 25, country: "USA" },
  { name: "Bob", age: 35, country: "UK" },
  { name: "Charlie", age: 30, country: "Canada" },
  { name: "Diana", age: 40, country: "Australia" },
  { name: "Eve", age: 28, country: "India" }
];

// Sort the array by age in descending order
const sortedByAgeDesc = people.sort((a, b) => b.age - a.age);
console.log("Sorted by Age (Descending):", sortedByAgeDesc);

// Filter the array to find people aged 30 or older and extract their names
const namesOf30OrOlder = sortedByAgeDesc
  .filter(person => person.age >= 30)
  .map(person => person.name);
console.log("Names of people aged 30 or older:", namesOf30OrOlder);
