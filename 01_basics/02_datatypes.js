console.log("It's a new day!");

// variable
var test = 9;

// declaration
var test;

// initialization
var test2 = 19;

/* declaration keywords: var, let, const
var = function scoped -> function() // shares value with the global scope -> bad!
let = block scoped { }
const = constant, can only be initialized but never changed afterwards
*/

// number
let aNumber = 11;

// string
let aString = "a";
let wholeTextString = "a whole set of characters";

// boolean 
let boolTrue = true;
let boolFalse = false;

// array / list (can be datatype undependant)
let aList = ['banana', 'apple', 'kiwi'];
let mixed = ['bandana', 34, false];

// object
let person = {
    name: "Stefan",
    age: 34,
    sex: "male"
};

// null - explicitly assign nothing to a variable
let nullVar = null;

// undefined - the variable is unassigned, usually done by the compiler and you should try to avoid doing it on your own. Very error prone
let undefinedVar;

// operations

// addition: + / substraction: - / division: / multiplication: * /
let num1 = 1;
let num2 = 7;
let result = num1 + num2;
let minusResult = num1 - num2;
let divisionResult = num2 / num1 ;
let multiResult = num1 * num2;
console.log(result);
console.log(minusResult);
console.log(divisionResult);
console.log(multiResult);

// logical operators: && (AND), || (OR), !(NOT)
let aTrue = true;
let aFalse = false;

if (aTrue && aFalse) {
    // do something
};

if (aTrue || aFalse) {
 // do something
}

// comparison

// is loose-equal: x == y // strict-equal: x === y
let looseEqual = (34 == "34");
let strictEqual = (34 === "34");

// is loose-not-equal: !=, strictly-not-equal: !==
let looseNotEqual = (34 != "34");
let strictlyNotEqual2 = (34 !== "34");

console.log("loose equal " + looseEqual);
console.log("strict equal " + strictEqual);
console.log("loose not equal " + looseNotEqual);
console.log("strict not equal " + strictlyNotEqual2);

// is bigger 11 > 9 , is smaller 8 < 11, is bigger or equal ">=" , is smaller or equal "<="
let isBigger = 11 > 8;
console.log("isBigger " + isBigger);
// etc...