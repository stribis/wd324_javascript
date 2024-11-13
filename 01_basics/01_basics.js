/* Comments -> help to understand code! Is not interpreted by the compiler

 line comment (a comment on a single line) */
 /* -> block comments, comments within multiple lines. Close again with the opposite pattern: */ // e.g. /* ... your comment ... */

/* variable, declaration, initializing and value assignment
    In computing, a variable is a piece of memory that stores a value that can be changed
  
 Naming:
    You can give any name to a variable. Good practise: the variable must explain what it is holding. Make it logical an easy to maintain
    There are so called "reserved keywords" which are "names" that are used by the language per se and are not available to be used for variable names, e.g. let, var, const, for, while, break, case, etc..
 Declaration:
    It means you introduce a variable to the script and thus to the compiler. The variable will get its existance
    A declared variable without value assignment / initialization is per default "undefined" and has no value. It is pretty much useless and waste of ressources */
    var myVariable;

/* declaration keywords: var, let, const 
    var = function scoped -> called local functions and are accessible anywhere in the scope (global scope). -> bad!
    let = block scoped { } -> variable that is declared inside a specific block & can't be accessed outside of that block. -> good!
    const = constant, can only be initialized but never changed afterwards
    credo: don't ever use 'var' anymore unless you have to deal with legacy code. It's more or less bad practise nowadays.

Initialization: 
    The first time you are assigning (give the variable a value) is called the variable initialization! */
let myNextVariable = 19;

/* Assignment: 
    Whenever you "assign" (give) a variable value, this is called "assignment" and you do it with the =-symbol
    Since js is dynamic, flexible and thus 'loose'-type scripted (debatable ;)) you can assign and reassign any value at any time to any variable (unless its a constant)*/
let myExample = "text";
console.log("on init: "+ myExample);
myExample = "another text";
console.log("1 reassignment: "+ myExample);
myExample = 12;
console.log("2 reassignment: "+ myExample);
myExample = false;
console.log("3 reassignment: "+ myExample);
myExample = ["a","b", "c"];
console.log("4 reassignment: "+ myExample);
myExample = {fruit: "banana", country: "belgium", river: "bog river"};
console.log("5 reassignment: "+ myExample);
console.log("It is been the same variable at all times but we had different datatypes assigned to it :o!");

// console.log => a object method that will print (log / log an entry) anything provided as arguments to the browser console.
console.log(typeof(console));
console.log("Hello World!");