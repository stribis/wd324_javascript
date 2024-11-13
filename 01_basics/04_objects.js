/* Object
 THE KING OF JAVASCRIPT ;) Imagine it of a representation of different data to the same topic, basically see it as a "Container" of data
 An object is iteratable and its key is the property!
 Declaration and Initialization  */
const myObjectLiteral = {}; // literal initialization
const myObjectNew = new Object(); // new keyword initialization -> the Object() is the constructor of the Class "Object", more or less the godfather of javascript

// its good practice to init an object with const, you can always change its values inside the container (properties) but you rarely have to reassign the reference!
const car = {
    // properties store information about the object in a key-value-pair (property-value-pair) -> the property is the key!
    color: "red",
    doors: 5,
    price: 50000,
    lincensed: true,
    position: {x: 1, y: 2},
    isBreak: true,
    
    // can implement functions => methods! (See it as an example, we will look at functions later)
    honk: () => console.log("Twoot, Twoot")
};
car.honk();

// You can also create the object and add the properties and values later:
const bike = {}
bike.color = "red";
bike.price = 500;
console.log(bike);
console.log(bike.color);

// or
const velo = new Object();
velo.color = "blue";
velo.price = 400;
console.log(velo);
console.log(velo.color);

/* How to access the values?
 dot notation // anytime you exactly know which property will be used*/
console.log(car.color);
console.log(car.price);

// bracket notation: when the property is unknown or must be flexible
let key = "color";
console.log("key color hardcoded: " + car["color"]);
console.log("key color flex: " + car[key]);

key = "space"
console.log("key color hardcoded: " + car["space"]);
console.log("key space flex: " + car[key]);


/* Arrays
 Understand Arrays like a list. It is a collection of something and each item in a list is an item.
 an Array is iterateble and its key is an index! The index starts from 0 and lasts until the last element. Since its indexed, it has a length! This information is super usefull, keep it in mind.
 an array is also an object just a special type of it! The difference between the both are the way how the values are stored.
 an object is initialized by {} while an Array with  [] and they key of objects are properties while they key for arrays are the indexes
 if you need proof, check typeof(anyArray) you will see that it is an object ;)

 // Its good practice to init an array with const, you can always change its values inside the list (item values) but you rarely have to reassign the reference of the array itself!
                   0     1   2    3       4         5 */
const myArray = ["text", 12, {}, false, undefined, null]; // index: 0: "text", 1: 12, 2: {}, 3: false, , 4: undefined, 5: null

let myString = "this is a string";
console.log("myString: " + typeof(myString));
console.log("myArray: " + typeof(myArray));

// only way to check if an array is an array:
console.log(Array.isArray(myArray));

// an array (the Array class in the js API) implements methods that will help you to easy access specific operations on an array like push, pop, split, order, etc..
// use a cheatsheet (https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-arrays/cheatsheet) and save yourself a lot of time

// check the length:
console.log("lenght on myArray: " + myArray.length);

// access an item at a specific position
let superItem = myArray[2];
console.log("super item is: " + superItem);

// reassign / change the value at a specific position
myArray[2] = 36769;
superItem = myArray[2];
console.log("super item is: " + superItem);

myArray[8] = "test";
superItem = myArray[8];
console.log("super item is: " + superItem);

// oh oh ... we don't like!
superItem = myArray[7];
console.log("super item is: " + superItem);