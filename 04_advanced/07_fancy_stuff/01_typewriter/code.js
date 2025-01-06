// the content of the typewriter, which is going to be displayed and deleted
let content = ["Cloudwalkers", "Daydreamers", "Mavericks", "Moonshiners", "Contrarians"];

// the count of the current word in the content array
let count = 0;

// the index count of the current character in the current word
let character_index = 0;

// variable to store the interval of the typewriter
let interval;

// reference of the typewriter element
const typewriter = document.querySelector("#typewriter");

// function to type
function type() {
  // extract the element of the current content, which is going to be typed
  let text = content[count].substring(0, character_index + 1);
  // setting the text in the HTML-Element
  typewriter.innerHTML = text;
  // updates the character index by one
  character_index++;
  // at this moment, it thinks that we're done, because we're at the end of the substring
  // that's why we need to check if the whole text has been typed, and that we're
  // continuing with the next word
  if (text === content[count]) {
    // clear the current type interval
    clearInterval(interval);
    // wait 100 milliseconds to start the deleteType function
    setTimeout(function () {
      interval = setInterval(deleteType, 100);
    }, 100);
  }
}

// function to delete
function deleteType() {
  // extracts the element of the current content, which is going to be deleted
  let text = content[count].substring(0, character_index + 1);
  // setting the text in the HTML-Element
  typewriter.innerHTML = text;
  // counts down the character index
  character_index--;

  // if the whole text is deleted
  if (text === "") {
    // we stop the interval, to escape the infinite loop
    clearInterval(interval);
    // increment count, reset to 0 if it exceeds content length
    count = (count + 1) % content.length;
    // reset the character index
    character_index = 0;
    // wait 200 miliseconds to start the type funciton again
    setTimeout(function () {
      interval = setInterval(type, 250);
    }, 200);
  }
}

// setting the interval with the help of setInterval
interval = setInterval(type, 250);
