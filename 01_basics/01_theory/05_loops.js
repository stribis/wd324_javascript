
/* loops: Loops can execute a block of code a number of times. Very handy since they will help you reduce code duplication by a lot!
   There are different types' resp. implementations of a loop:

    for - loops through a block of code a number of times
    for/in - loops through the properties of an object
    for/of - loops through the values of an iterable object
    while - loops through a block of code while a specified condition is true
    do/while - also loops through a block of code while a specified condition is true

THE (for) loop (-in, -of, .forEach() )
basic template for any for loop: 
    for (expression 1; expression 2; expression 3) {
        // code block to be executed
    }
        where:
        Expression 1 is executed (one time) before the execution of the code block.
        Expression 2 defines the condition for executing the code block.
        Expression 3 is executed (every time) after the code block has been executed.
*/
for (let i = 1; i < 10; i++) {
    console.log(i);
}

// let's use this to iterate through a list:
const fruits = ["banana", "apple", "kiwi", "avocado"];

// instead of (imagine your list has 50000000 items):
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
/* ...

just do: */
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let fruit in fruits) {
    console.log(fruit);
}

let value;
for (value of fruits) {
    console.log(value);
}

/* Differentiate for/in and for/of more explicitly:
   - for/in iterates over keys in an object or array.
   - for/of iterates over values in iterable objects like arrays. */

// Array.forEach(item => item * so something with it) -> loop over an array directly, the variable declared before the => will be each item value at the specific iteration
fruits.forEach(fruit => console.log(fruit));

// let's take an object now:
const humanBeing = {
    name: "hans",
    age: 22,
    sex: "male",
    isHappy: true,
    friends: ["Olga", "Peter", "Charles"]
}

// instead of (imagine your object has 50000000 properties):
console.log(humanBeing.name);
console.log(humanBeing.age);
console.log(humanBeing.sex);
console.log(humanBeing.isHappy);
console.log(humanBeing.friends);

// the name of the key
for (let key in humanBeing) {
    console.log(key);
}

// the value associated to the key
for (let key in humanBeing) {
    console.log(humanBeing[key]);
}

/* while loop
Checks a condition and as long as it is true, it will repeat the code block. Be very carefully to break the conditions otherwise you will end your computer power ;) (Infinite loop)
If the condition is not met from the begining on, it will never run

example of a while loop:
*/
let j = 0;
while (j < 10) {
    console.log("whileloop: " + j);
    j++;
}

/* do-while loop
It's the same as the while loop, but it will do something before the loop will even start (the code block is BEFORE the condition). So in any case it will always run at least once.

example for a do-while loop:
*/
let y = 0;
do {
    console.log("whileloop: " + j);
    y++;
} while (y < 10);


// break, continue, label

// break, lets you leave the current clock -> escape to loop if it's' not necessary to continue the loop at some point. Very efficient if your list e.g. has 1mio entries, and you are only interested in a specific one.
for (let i = 1; i < 10; i++) {
    console.log("break:" + i);
    if (i === 3) {
        break;
    }
}

// continue, lets you skip the rest of the block after they keyword and start the next loop (you don't break out the loop just the current iteration)
for (let i = 1; i < 10; i++) {
    console.log("continue: " + i);
    if (i === 3) {
        console.log("I am 3 and I need to do something very special!");
        continue;
    }
    console.log("I am not 3 and I don't care about the very special thingy.");
}

// label - a way to break out from nested loops and skip nested blocks. 
outerLoop: for (let i = 0; i < 3; i++) {
    innerLoop: for (let j = 0; j < 3; j++) {
        if (i === j) break outerLoop;
        console.log(`i: ${i}, j: ${j}`);
    }
}