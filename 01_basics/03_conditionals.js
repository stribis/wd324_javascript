/* Control Structures: if-else Statements (if, if else, else, switch);
 an if statement always checks if a condition is met and if so the code in the block is exectued. 
 You can check further conditions as many as you want and close if an else but its not a must 
 to execute code when the conditions were never met*/


let color; // -> color === undefined! :()
color = "red"; // we saved the day!
// better: 
let colour = "red";

// the condition that is checked:
if (color === "red") 
{
    // if the condition is truly met, everything inside this brackets will be executed and otherwise skipped
    console.log("color is red");
}

// but there might be other possibilities
else if (color === "pink") 
{
    console.log("color is pink");
}
// or even more?
else if (color === "green") 
{
    console.log("color is green");
}
// ... as many else if as you want
// then optionally close it with an "else" (in any other case) to do something that only happens when none of the conditions were met
else
{
    // but what if I am looking for purple ???
    console.log("color is not available");
};

// Switch: (syntactic sugar // syntax sugar) -- it is the same as the if-else condition under the hood, just "nicely" written
switch(color) 
{
    case "red": 
    console.log("color is red");
    break; // check loops

    case "pink": 
    console.log("color is pink");
    break;

    case "green": 
    console.log("color is green");
    break;

    default:
    console.log("color is not available");
}