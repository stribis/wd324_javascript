/* What is a function?

    A function is a reusable block of code that performs a specific task.
    Functions allow for modularity, reusability, and abstraction.

    Why use functions?

    Reduce repetition: You don't need to write the same code multiple times.
    Simplify complex tasks: Functions can break down a big task into smaller, manageable pieces.
    Improve readability: Using descriptive function names makes code more readable and maintainable. */


// Basic Function Declaration
function functionName(parameters) {
    // code to be executed
}

function helloWorld() {
    console.log("Hello, world!");
}

helloWorld(); // Calling the function


/* Parts of the function:
    Function keyword: function
    Function name: helloWorld
    Parameters: Empty here, but functions can accept parameters.
    Code block: The logic that will be executed when the function is called.
 */

// Parameters and Arguments
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alice");  // Outputs: Hello, Alice!

/* Parameter: The variable inside the parentheses (name).
   Argument: The value passed to the function when calling it ("Alice").
   Default Parameters: Explain how parameters can have default values.*/

function greetWithDefaultArgument(name = "Guest") {
    console.log("Hello, " + name + "!");
}

greet();       // Outputs: Hello, Guest!
greetWithDefaultArgument("Bob");  // Outputs: Hello, Bob!


/* 4. Return Statement
Functions can return a value back to the caller using the return statement.
A function can return any type of value (string, number, object, etc.).
Without return: A function will return undefined by default.*/

    function addAandB(a, b) {
    return a + b;
}

let resultAAndB = addAandB(3, 5);
console.log(resultAAndB);  // Outputs: 8


/* Function Expressions
Functions are stored in variables.
These functions are anonymous (no name).
Storing functions in variables allows them to be passed around like any other value.*/

    const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(4, 5));  // Outputs: 20


/* 6. Arrow Functions (ES6)
The modern arrow function syntax, which is more concise. */

/* const functionName = (parameters) => {
    // code to be executed
};*/

const add = (a, b) => a + b;
console.log(add(3, 5));  // Outputs: 8

/* Why use arrow functions?
    Shorter syntax, especially for one-liners.
    Lexical this binding: Arrow functions don't bind their own this, making them more predictable in certain contexts
    (explained later).*/


/* 7. Scope and Closures
Scope:
    Local vs. Global Scope:
    A variable declared inside a function is local to that function and cannot be accessed outside.
    A variable declared outside a function is global and accessible anywhere in the code. */

    let globalVar = "I am global";

    function myFunction() {
    let localVar = "I am local";
    console.log(globalVar);  // Accessible
    console.log(localVar);   // Accessible inside the function
}

myFunction();
// console.log(localVar);  // Error: localVar is not defined

// var and scope:
/* scope makes the var keyword especially painful because var is function and not block scoped:*/
function testVar() {
    if (true) {
        var x = 10; // Scoped to the function, not the block
    }
    console.log(x); // Works! Output: 10
}

testVar();

// the same with let or const:
function testLet() {
    if (true) {
        let x = 10; // Scoped to the block
    }
    /* console.log(x); Error! x is not defined, because x was defined in the local scope
                       and the global scope has no access to it */
}

testLet();

/* if option var works but let / const doesn't, why is it bad?
Imagine you declare a variable using var (function scoped) in the global scope and you change the same in the local
scope, what do you think happens?
 */
var xVar = 0;
function testVarWithGlobal() {
    if (true) {
        var xVar = 10; // Scoped to the block
    }
    console.log(xVar); // Output: xVar = 10 inside the functions block scope
}

testVarWithGlobal();
console.log(xVar); /* Output: xVar = 10 you managed to overwrite the global scoped variable because it was declared as var,
                   which is not good and a huge side effect */

// vs
let xLet = 0;
function testLetWithGlobal() {
    if (true) {
        let xLet = 10; // Scoped to the block
        console.log(xLet); // Output: x = 10 inside the functions block scope
    }
    console.log(xLet); /* Output: x = 0 is again taking the value from global scope which remains unchanged
    as the variable was block scoped with let */
}

testLetWithGlobal();
console.log(xLet); /* Output: x = 0 the xLet inside the function is not the same as the xLet in the global
 scope because of let, which is good as yo will probably use this variable of the global scope for different things too! */


/* Closures: Functions "remember" the environment in which they were created, even after they are executed outside
/ their original scope. */
    function outer() {
    let outerVar = "I am from the outer function";

    return function inner() {
        console.log(outerVar);  // The inner function has access to outerVar
    };
}

const innerFunction = outer();
innerFunction();  // Outputs: I am from the outer function

/* Real Life Analogies:

Bakery Order Real Life Analogy:
Imagine you order a custom cake at a bakery.
You tell the baker specific details like "I want chocolate flavor and birthday decorations."
The baker remembers your preferences even after you've left and bakes the cake as per your instructions later. */
function orderCake(flavor, decoration) {
    return function bakeCake() {
        console.log(`Baking a ${flavor} cake with ${decoration} decorations.`);
    };
}

const myCake = orderCake("chocolate", "birthday");
const patricksCake = orderCake("vanilla", "wedding");

// use anywhere later in the code
myCake(); // Output: Baking a chocolate cake with birthday decorations.
patricksCake() // Output: Baking a vanilla cake with wedding decorations.

// In the real world, you might want to place an order now and bake the cake later.
// The closure helps by remembering the flavor and decoration details at the time the order
// was placed, even if the baking happens much later.

/* To-Do Reminder Real Life Analogy:
Imagine a timer app that allows users to set multiple reminders.
Each reminder is stored with a message, and when the timer triggers,
the app retrieves the specific message to display.
Here, closures are helpful to preserve the context of each reminder.
*/
function setReminder(task) {
    const reminderTime = new Date().toLocaleTimeString();
    return function() {
        console.log(`Reminder set at ${reminderTime}: ${task}`);
    };
}

// Usage
const reminder1 = setReminder("Finish the project report", 5000);
const reminder2 = setReminder("Call the client", 3000);

// Simulating different timers
setTimeout(reminder1, 5000); // Executes after 5 seconds
setTimeout(reminder2, 3000); // Executes after 3 seconds

/* Why Use Closures Here?
The reminders are set at different times,
and each closure "remembers" its unique task and reminderTime even though setReminder has exited.

Other typical or useful examples:
    - Access Control: Imagine implementing a system where only authenticated users can access a set of operations.
                      Closure can be used to encapsulate the user's state.
    - Event Listeners: Imagine implementing a game where each button click increases the player’s score.
                       Using a closure allows the score to persist between clicks and multiple users can have different
                       own click states.
    - Configuration for Functions: Imagine a restaurant menu where you pre-configure a meal and then repeatedly use
                                   it to calculate the cost. The base price and tax rate are pre-configured,
                                   simplifying future calculations by reusing a `burgerMeal` function.
    - Data Caching: Closures are great for caching results of expensive calculations. The cache object is preserved
                    across calls, avoiding redundant calculations.


8. Higher Order Functions
A higher-order function is a function that:
    - Takes one or more functions as arguments.
    - Returns a function as its result.

 Real-Life Analogy for Higher-Order Functions:

Chef Example:
A head chef delegates tasks to assistants. Each assistant specializes in a specific type of dish,
like appetizers or desserts. The chef picks the right assistant based on the type of dish.*/
function chooseAssistant(dishType) {
    if (dishType === "appetizer") {
        return function prepareAppetizer() {
            console.log("Preparing a delicious appetizer.");
        };
    } else if (dishType === "dessert") {
        return function prepareDessert() {
            console.log("Preparing a sweet dessert.");
        };
    }
}

const assistant = chooseAssistant("dessert");
const subAssistant = chooseAssistant("appetizer");
assistant(); // Output: Preparing a sweet dessert.
subAssistant(); // Output: Preparing a delicious appetizer.

/* Filter and Sort Example Real Life Analogy:
Imagine you’re sorting through a photo album. You apply a filter to select only black-and-white photos,
then sort them by date. The "filter" and "sort" functions represent higher-order functions.
*/
const photos = [
    { type: "black-and-white", date: "2022-01-01" },
    { type: "color", date: "2023-06-15" },
    { type: "black-and-white", date: "2021-12-25" },
];

const blackAndWhitePhotos = photos.filter(photo => photo.type === "black-and-white");
console.log(blackAndWhitePhotos);

const sortedPhotos = blackAndWhitePhotos.sort((a, b) =>
    new Date(a.date) - new Date(b.date));
console.log(sortedPhotos);

/* Closure vs Higher Order Function
Closures:
    - Use to encapsulate state and create specialized functions with shared context.
    - Example: Reminder systems, factory functions, encapsulation of private variables.

Higher-Order Functions:
    - Use to abstract patterns and pass/return functions dynamically.
    - Example: Data filtering, event handling, and functional composition


10. Best Practices and Conventions
- Use descriptive function names (e.g., calculateSum instead of doStuff).
- Keep functions small and focused (Single Responsibility Principle).
- Avoid side effects where possible.
- Use arrow functions for concise code and lexical scoping of this.
*/