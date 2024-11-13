/* What are data types?
   Data types specify the kind of information a variable is holding so that the computer knows which computations can be done. 
   Data types do not care exactly “what” the data is, but “how” it can be used. 

   There are 7 primitive data types in JavaScript
    string
    number
    BigInt
    boolean
    Symbol
    undefined
    null

There is only one non-primitive data type in JavaScript
    object


/* primitive datatypes
When a primitive data type is defined, it is given an address on the Call Stack, rather than the Memory Heap.
A primitive data type cannot be changed after its creation, meaning that it is an immutable data type. 
If we assign a primitive data type a new value, the prior value’s address is still held in memory. 
The new value is given a different address.*/

/* numbers:
In JavaScript, all numbers are stored in a 64-bit floating-point format (IEEE 754 standard).
With this standard, large integer cannot be exactly represented and will be rounded.
Because of this, JavaScript can only safely represent integers:
Up to 9007199254740991 +(253-1) and Down to -9007199254740991 -(253-1).
Integer values outside this range lose precision. JavaScript integers are only accurate up to 15 digits

number
Values represent floating-point numbers like 37 or -9.25. at 15 digit precision */
let aPositiveInteger = 11;
let aNegativeInteger = -11;
let aDecimal = 11.11;

/* BigInt (not very important, just if you run out of number precision use a BigInt instead ;))
The BigInt type is a numeric primitive in JavaScript that can represent integers with arbitrary magnitude. 
With BigInts, you can safely store and operate on large integers even beyond the safe integer limit (Number.MAX_SAFE_INTEGER) for Numbers */
let aBigInt = BigInt(1234567890123456789012345);

// string
// see it simply as anything that is a text. In the end it is a collection of characters joined to one element. Always use "" or '' (be consistent!)
let aString = "a";
let wholeTextString = "a whole set of characters";

/* concatenation of strings
to add several strings or mix it with other variables (the other value will be converted to a string if possible!) use the + symbol*/
let stringPartA = "A dog went to find a bone."
let stringPartB = "After"
let stringPartC = "Minutes"
let stringPartD = "he couldnt find any"
let concatenatedString = stringPartA +  " " + stringPartB + " " + 5 + " " + stringPartC +  " " + stringPartD + ".";
console.log(concatenatedString);

/* string interpolation, string templating:
instead of "" or '' use backticks ` and whatever other value than a string that you want to interpolate add in ${} */
let stringInterpolation = `lets mix test with ${aString} or ${11} or a ${true}. Whatever in the end everything is interpolated to a string!` ;
console.log(stringInterpolation)

// boolean - the datatype that has one of two possible value: true or false.
let boolTrue = true; // = 1;
let boolFalse = false; // = 0;

/* Symbol (not very important, since you might not really use this datatype ever)
In JavaScript, the Symbol is a primitive data type introduced in ES6. It is created using the `Symbol()` function, 
which returns a unique symbol value each time it is called. Symbols are immutable and unique, 
making them useful for creating property keys that are guaranteed to be unique across different objects. 
They are often used to define non-enumerable object properties. */
let mySymbol = Symbol('mySymbol');
let myOtherSymbol = Symbol('mySymbol');
let isSymbolUnique = mySymbol === myOtherSymbol
console.log("is the symbol unique? " + isSymbolUnique);

// undefined - the variable is unassigned, usually done by the compiler and you should try to avoid doing it on your own. Very error prone
let undefinedVar;
undefinedVar = undefined;

// null - explicitly assign nothing to a variable as you as a programmer really intend to do that.
let nullVar = null;

// fun-fact:
// undefined and null both are an special kind objects and thus confusingly "primitive" types. In none of the cases they will ever be the same!
console.log("typeof(undefined): " + typeof(undefined));
console.log("typeof(null): " + typeof(null));
console.log("undefined == null: "+ undefined == null);
console.log("undefined == null: " + undefined === null);

/* non-primitive / reference type
Stored on the Memory Heap
A non-primitive data type is assigned an address as a value, which then creates a pointer to that address location in the memory heap.
Mutable: Non-primitive data types are mutable, which means when they are modified, the original copy is modified. 
Modifying these will not create a copy at a different address. Any direct modifications will effect the same address in the heap.*/

// object
let person = {
    name: "Stefan",
    age: 34,
    sex: "male"
};

// array (list) -> is an object!
let aList = ['banana', 'apple', 'kiwi']; // string[] -> an array of strings
let mixed = ['bandana', 34, false]; // string[string | number | boolean] -> an array of strings or numbers or booleans
console.log(typeof(aList)); // -> check if it is an object
Array.isArray(aList); // -> check if it is an array


/* operations
 arithmetic operations: addition: + / substraction: - / division: / multiplication: * / modulo: % (reminder of a division) */
let num1 = 1;
let num2 = 7;
let result = num1 + num2;
let minusResult = num1 - num2;
let divisionResult = num2 / num1 ;
let multiResult = num1 * num2;
let moduloValue = 9 % 2;
console.log("addition result: " + result);
console.log("substraction result: " + minusResult);
console.log("division result: " + divisionResult);
console.log("multiplication result :" + multiResult);
console.log("modulo value: " + moduloValue);

// increment & decrement
let incrementMe = 1;
incrementMe = incrementMe + 1
// or
incrementMe += 1; // or 2, 3, etc..
// or
incrementMe++; // always +1

let decrementMe = 10;
incrementMe = decrementMe - 1
// or
decrementMe -= 1; // or 2, 3, etc..
// or
decrementMe--; // always -1


/* logical operations: && (AND), || (OR), !(NOT)
 && checks if two conditions are true
 || checks if at least one condition of two is true
 ! checks if a condition is not true, it inverts equality, often used by != (not equal) or !conditionVariable (opposite of the boolean value) */
let aTrue = true;
let aFalse = false;

if (aTrue && aFalse) {
    // do something
};

if (aTrue || aFalse) {
    // do something
}

/* comparison
 to avoid errors and boost efficiency for everyone, always use strict ways 
 is loose-equal: x == y // strict-equal: x === y */
let looseEqual = (34 == "34");
let strictEqual = (34 === "34");

// is loose-not-equal: !=, strictly-not-equal: !==
let looseNotEqual = (34 != "34");
let strictlyNotEqual2 = (34 !== "34");

console.log("loose equal " + looseEqual);
console.log("strict equal " + strictEqual);
console.log("loose not equal " + looseNotEqual);
console.log("strict not equal " + strictlyNotEqual2);

// is bigger 11 ">" 9 , is smaller 8 "<"" 11, is bigger or equal ">=" , is smaller or equal "<=", similar to elementary school "crocodile eats the winner"; 
let isBigger = 11 > 8;
console.log("isBigger " + isBigger);
// etc...