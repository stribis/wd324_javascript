/* Object
 THE KING OF JAVASCRIPT ;) Imagine it of a representation of different data to the same topic, basically see it as a "Container" of data

 Declaration and Initialization  */
const myObjectLiteral = {}; // literal initialization
const myObjectNew = new Object(); // new keyword initialization -> the Object() is the constructor of the Class "Object", more or less the godfather of javascript

// its good practice to init an object with const, you can always change its values inside the container (properties) but you rarely have to reassign the reference!
const car = {
    // properties store information about the object in a key-value-pair (property-value-pair) -> the property is the key!
    color: "red",
    doors: 5,
    price: 50000,
    licensed: true,
    position: {x: 1, y: 2},
    isBreak: true,
    
    // can implement functions => methods! (See it as an example, we will look at functions later)
    honk: function() {
        console.log("Twoot, Twoot")
    }
};

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

// and you can check if a property exists with the "in" keyword.
console.log("color" in velo); // true
console.log("sunroof" in velo); // false
console.log(car.hasOwnProperty("doors")); // true

/* how to access the values
 dot notation: anytime you exactly know which property will be used */
console.log(car.color);
console.log(car.price);

// bracket notation: when the property is unknown or must be flexible
let key = "color";
console.log("key color hardcoded: " + car["color"]);
console.log("key color flex: " + car[key]);

key = "space"
console.log("key color hardcoded: " + car["space"]);
console.log("key space flex: " + car[key]);

// change (reassign) the value
car.licensed = false; // No need to reassign car, just modifying properties


/* iterablility
Objects are not inherently iterable. To iterate over an object's properties, you need specific methods like
- for...in,
- Object.keys(),
- Object.values()
- Object.entries() */
for (key in car) {
    console.log(key);
}
console.log("Object.Keys()");
console.log(Object.keys(car));
console.log("Object.values()");
console.log(Object.values(car));
console.log("Object.entries()");
console.log(Object.entries(car));

/* Arrays
 Understand Arrays like a list. It is a collection of something and each item in a list is an item.
 an Array is iterable and its key is an index! The index starts from 0 and lasts until the last element. Since its indexed, it has a length! This information is super usefull, keep it in mind.
 an array is also an object just a special type of it! The difference between the both are the way how the values are stored.
 an object is initialized by {} while an Array with  [] and they key of objects are properties while they key for arrays are the indexes
 if you need proof, check typeof(anyArray) you will see that it is an object ;)

 // Its good practice to init an array with const, you can always change its values inside the list (item values) but you rarely have to reassign the reference of the array itself!
                   0     1   2    3       4         5 */
const myArray = ["first-item", "second-item", 12, {x: 1, y:2}, false, undefined, null, "last-item"]; // index: 0: "text", 1: 12, 2: {}, 3: false, , 4: undefined, 5: null

let myString = "this is a string";
console.log("myString: " + typeof(myString));
console.log("myArray: " + typeof(myArray));

// check if an object is an array:
console.log(Array.isArray(myArray)); // Array.isArray
console.log(myArray instanceof Array); // instanceof Array

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

// oh, oh ... we don't like!
superItem = myArray[7];
console.log("super item is: " + superItem);

/* an array (the Array class in the js API) implements methods that will help you to easy access specific operations on an array like push, pop, split, order, etc..
   use a cheatsheet (https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-arrays/cheatsheet) and save yourself a lot of time
   some examples:
 - push()
 - pop()
 - shift()
 - unshift()
 - splice()
 - slice() */

// push
myArray.push("pushed-item"); // The push() method of Array  instances adds the specified elements to the end of an array and returns the new length of the array
console.log(myArray[myArray.length - 1]);

// pop
myArray.pop(); // The pop() method of Array  instances removes the last element from an array and returns that element. This method changes the length of the array
console.log(myArray[myArray.length - 1]);

// shift
console.log(myArray.length);
myArray.shift() // The shift() method of Array  instances removes the first element from an array and returns that removed element. This method changes the length of the array
console.log(myArray[0]);
console.log(myArray.length);

// unshift
console.log(myArray.length);
myArray.unshift("new-item"); // The unshift() method of Array  instances adds the specified elements to the beginning of an array and returns the new length of the array
console.log(myArray[0]);
console.log(myArray.length);

// splice
console.log(myArray.length);
console.log("splicing from position 0, delete 2 items:");
myArray.splice(0, 2); // The splice() method of Array  instances changes the contents of an array by removing or replacing existing elements and/ or adding new elements in place .
myArray.forEach((item) => console.log(item));
console.log(myArray.length);

// slice
console.log(myArray.length);
console.log("slicing from (included) index 0 to index 3 (not included!)");
mySliceResult = myArray.slice(0, 3); // The slice() method of Array  instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified
mySliceResult.forEach((item) => console.log(item));