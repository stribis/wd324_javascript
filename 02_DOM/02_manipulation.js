// DOM: Element selection:

/* getElementsByClassName()
     Returns a live HTMLCollection of elements matching a class name.
     If you need a specific one you have to select the correct index of the item
     e.g. document.getElementsByClassName("classX")[0] -> first element found in the DOM
*/

 const divElements = document.getElementsByClassName("class1");

for (let div in divElements) {
    console.log(div.innerHTML);
}

/* getElementById()
    Returns the element with the specified unique id
    It is superfast, since it doesn't have to work with indexes
 */
const pElement = document.getElementById("id1");
console.log(pElement);

/* querySelector()
    Returns the first element within the document that matches a specified CSS selector.
    Supports CSS selectors, allowing you to target elements in a more flexible and specific way
    (e.g., ".class", "#id", "div > p").
    Can combine multiple selectors in a single query (e.g., "div.class1.class2").
    It is slower since it has to parse css selectors, but it's still the most convenient way,
    if performance doesn't really matter which rarely does.
*/
const divElement2 = document.querySelector(".class1");
const pElement2 = document.querySelector("#id1");
console.log(divElement2);
console.log(pElement2);

/* querySelectorAll()
    Returns a static NodeList of all elements in the document that match a specified CSS selector.
    Supports CSS selectors, just like querySelector.
    Returns all matching elements, not just the first one.
    The returned NodeList is static, meaning it does not update if the DOM changes
    (unlike the live HTMLCollection from getElementsByClassName).
* */
const allLiElements = document.querySelectorAll("li");
console.log(allLiElements);


/*
Key differences for DOM Selection possibilities:

| **Feature**               | `querySelectorAll`                 | `querySelector`             | `getElementsByClassName`       | `getElementById`              |
|---------------------------|------------------------------------|-----------------------------|--------------------------------|-------------------------------|
| **Selector Type**         | CSS selectors                     | CSS selectors (`.class`, `#id`) | Class names only          | ID only                      |
| **Returns**               | Static NodeList                   | Single element              | Live HTMLCollection           | Single element               |
| **Number of Elements**    | Multiple                          | First matching element      | All matching elements         | Only one (unique ID)         |
| **Live/Static**           | Static                            | N/A                         | Live                          | N/A                          |
| **Flexibility**           | High                              | High                        | Moderate                      | Low                          |
| **Performance**           | Slower than `getElementsByClassName` | Slower than `getElementById` | Faster than `querySelectorAll`| Fastest                      |
| **Use Case**              | Complex multi-element selections  | First element by CSS selector | Multiple elements by class   | Unique, single element by ID|
*/

// DOM: Elements Modification

/* innerText, textContent and innerHTML:
   innerText
        - Changes or retrieves the text content of an element.
        - Does not include hidden elements or preserve HTML structure.
*/
divElement2.innerText = ".innerText!";

/*
    textContent
        - Similar to innerText, but includes hidden elements and is faster because it avoids layout calculations.
        - Does not interpret HTML tags. */
pElement2.textContent = ".textContent";

/*
innerHTML
    Changes or retrieves the HTML content of an element.
    Supports adding or replacing HTML tags.
 */
divElement2.innerHTML = "<p>New Paragraph .innerHTML</p>";

/*
| **Property**   | **Includes HTML?** | **Includes Hidden Elements?** | **Use Case**                          |
|----------------|---------------------|--------------------------------|----------------------------------------|
| `innerText`    | No                 | No                             | When you care about visible text only.|
| `textContent`  | No                 | Yes                            | Fastest for plain text.               |
| `innerHTML`    | Yes                | N/A                            | When working with HTML markup.        |
*/

/* Setting Attributes
    Use setAttribute(name, value) or direct property assignment.
 */
divElement2.setAttribute("id", "mySetAttributeId");
// or
divElement2.id = "my.id";
// also
divElement2.alt = "my alt text .alt";
// etc.

// even (inline styling)
divElement2.setAttribute("style", "color: red; fontSize: 30px");
// is equal to:
divElement2.style.color = "red";
divElement2.style.fontSize = "30px";

/* Getting Attributes
    Use getAttribute(name) to retrieve an attribute value.
*/
const styleAttributeValue = divElement2.getAttribute("style");
console.log("style attribute value on divElement: "+ styleAttributeValue);

/*
| **Action**         | **Method**             | **Example**                                      |
|--------------------|-----------------------|------------------------------------------------|
| Set an attribute   | `setAttribute`        | `element.setAttribute("src", "image.png");`    |
| Get an attribute   | `getAttribute`        | `element.getAttribute("src");`                |
| Remove an attribute| `removeAttribute`     | `element.removeAttribute("src");`             |
*/

/* Set ClassNames
    Use classList.add(className) to add a className to an element.
 */
divElement2.classList.add("newClassName");

/* Toggle ClassNames
    Use classList.toggle(className) to toggle a className on an element
    toggling means: if it is there, remove it and if it is not there add it.
 */
divElement2.classList.toggle("newClassName"); // removes it, since its there as it was added in line 107;
divElement2.classList.toggle("newClassName"); // adds it again, since it got removed by toggling on line 113;
// ...

/* Remove ClassNames
   Use classList.remove(className) to remove a className from an element
*/
divElement2.classList.remove("newClassName");

/* Check ClassNames existence
   Use classList.contains(className) checks if the element is in the classList of the element
*/
divElement2.classList.contains("newClassName"); // Output: false, as it got remove on line 120;

/*
| **Action**           | **Method/Property**       | **Example**                               |
|----------------------|--------------------------|------------------------------------------|
| Change inline styles | `style`                 | `element.style.color = "red";`           |
| Add a CSS class      | `classList.add`         | `element.classList.add("highlight");`    |
| Remove a CSS class   | `classList.remove`      | `element.classList.remove("highlight");` |
| Toggle a CSS class   | `classList.toggle`      | `element.classList.toggle("highlight");` |
| Check for a class    | `classList.contains`    | `element.classList.contains("highlight");`|
*/


/* Adding, appending and removal
   You can dynamically create, append, or remove elements from the DOM.

Creation:
   Use document.createElement(tagName) to create an element. The DOM doesn't know where it should be in the DOM structure.
*/
const newButton = document.createElement("button");
newButton.textContent = "Click Me!";

/* Appending
    Use parentElement.appendChild(yourElement)
    Now the DOM needs to know where you want to add the element in the DOM structure to.
    Therefore, just choose the parent element for it and append your element to it.
*/
const body = document.body;
body.appendChild(newButton); // appends the newButton element to the Body

// or:
const container = document.createElement("container");
container.appendChild(newButton); // appends the newButton element to the container element

/* Removal
    Use element.remove() to remove an element from the DOM
*/
newButton.remove();

/* removeChild:
    Use removeChild to remove a child element of a node
        - Requires a reference to the parent and the child.
        - Works in older browsers.
*/
const parent = document.querySelector(".parent");
const child = document.querySelector(".elementToRemove")
parent.removeChild(child);

/* replaceChild
   Replaces a child node of a parent element with a new node.
   - Called on the parent of the element being replaced.
   - Requires you to explicitly provide the parent node and both the new and old child elements.
   - Can only replace one element at a time.
   - Works on older browsers, making it useful for compatibility.
*/
const newPElement = document.createElement("pElement2");
newPElement.textContent = "a new P-Element!";
pElement.parentNode.replaceChild(newPElement, pElement)

/* replaceWith
   Replaces an element with one or more new nodes or strings.
   - Called on the element you want to replace.
   - Can replace the element with one or multiple new elements or strings.
   - Simpler and more modern than replaceChild.
   - Does not require a reference to the parent element.
*/
pElement.replaceWith(newPElement);

/*
| **Action**        | **Method**             | **Example**                                         |
|-------------------|-----------------------|---------------------------------------------------|
| Create an element | `document.createElement` | `const div = document.createElement("div");`       |
| Append an element | `appendChild`          | `parent.appendChild(child);`                      |
| Remove an element | `remove`              | `element.remove();`                               |
| Remove a child    | `removeChild`         | `parent.removeChild(child);`                      |
| Replace an element| `replaceChild`        | `parent.replaceChild(newChild, oldChild);`        |
| Replace an element| `replaceWith`         | `element.replaceWith(newElement);`                |
*/


/* cloneNode(deep?)
Use cloneNode() to clone an existing DOM element. This creates a duplicate of an existing DOM element.
Parameter: deep (optional):
    true: Clones the element and all its child nodes (deep copy).
    false: Clones only the element without its children (shallow copy). -> default if you don't pass it.

    - The cloned element is not part of the DOM until explicitly appended.
    - Event listeners and certain properties (e.g., dataset) are not cloned.
*/

const clones = document.querySelector(".clone-container");
const original = document.querySelector(".original");

// Shallow clone
const shallowClone = original.cloneNode(); // or false

// Deep clone
const  deepClone = original.cloneNode(true).cloneNode(true);

// Append the clones to the DOM!
clones.appendChild(shallowClone);
clones.appendChild(deepClone);

/*
| **Action**        | **Method**             | **Example**                                         |
|-------------------|-----------------------|---------------------------------------------------|
| Create an element | `document.createElement` | `const div = document.createElement("div");`       |
| Append an element | `appendChild`          | `parent.appendChild(child);`                      |
| Remove an element | `remove`              | `element.remove();`                               |
| Remove a child    | `removeChild`         | `parent.removeChild(child);`                      |
| Replace an element| `replaceChild`        | `parent.replaceChild(newChild, oldChild);`        |
| Replace an element| `replaceWith`         | `element.replaceWith(newElement);`                |
| Clone an element  | `cloneNode`           | `const clone = element.cloneNode(true);`          |
*/


//  Event Listener:

/* Adding an event listener to the DOM:
   To add an event listener to an element, you use the addEventListener method.
   This method allows you to define a specific function that will execute
   when the specified event occurs on the target element.

   syntax: element.addEventListener(event, listener, options);
   Parameters:
    - event: A string representing the name of the event (e.g., "click", "mouseover", "keydown").
    - listener: A function that will be executed when the event occurs.
            - can be an anonymous function, function expression or an arrow function (see basics/06_functions)
    - options (optional): An object or a boolean that specifies options for the listener:
        capture: If true, the event is captured in the capturing phase.
        once: If true, the listener is executed only once and then removed.
        passive: If true, indicates that the listener will not call preventDefault()
*/
const buttonX = document.querySelector(".buttonX");
const buttonY = document.querySelector(".buttonY");
const buttonZ = document.querySelector(".buttonZ");

// function declarations (or anonymous)
buttonX.addEventListener("click", function LogToConsole() { // or just function() -> anonymous function {
    alert("ButtonX clicked! (listener via (anonymous) function declaration");
});

// function expression
const myFunction = function () {
    alert("ButtonY clicked! (listener via function expression)");
}
buttonY.addEventListener("click", myFunction);

// arrow function
buttonZ.addEventListener("click", () => {
    alert("ButtonZ clicked! (listener via arrow function)");
});


/*  Wow, that is a lot of theory, now put it into practise!!
    Let's implement some simple ui logic:
    - Our Web App will contain a To-Do-List
    - The user should be able to add and remove to-do's there!
*/

// Get all required and known Elements inside the DOM:
const input = document.querySelector("#name");
const addBtn = document.querySelector(".addBtn");
const removeBtn = document.querySelector(".removeBtn");
const toDoList = document.querySelector(".to-do-list")

// create the functions that will proceed the logic:

// add the item logic
const addItem = function addItem() {
      const value = input.value; // we get the value that is inside the input element, basically what the user typed in

      // we don't want the user to be able to enter an empty to-do! What would it be good for?
      if (value === "") { // if the value in the input box is empty, we just inform the user and leave the function
          alert("You must give the todo a name!")
          return;
      }

      // if the input has a value, we can create a new li and append it to the DOM:
      const newItem = document.createElement("li"); // we create a new li element
      newItem.classList.add("to-do-item"); // we add a class 'to-do-item' to the new li element, so we can better select it later
      newItem.textContent = value; // we assign the value retrieved from the input-box to the textContent of the new li element
      toDoList.appendChild(newItem); // we append the li element to the toDoList which is an ul element in the DOM
};

/* remove the item logc
   Pre-Warning: this function is a bit more complex ;) */
const removeItem = function removeItem() {
    const value = input.value; // we get the name of the item from the input box (the one the user wants to remove)
    const toDoItems = document.querySelectorAll(".to-do-item"); // we get all to-do-items
    const toDoItemsArray = [...toDoItems]; // we intend to find a specific item in the list of all to-do-items,
                                                  // that can easily be done with the array method "find". But since the
                                                 // querySelectorAll() returns a NodeListOf<Element> and not an Array,
                                                 // we have to convert it to an Array (parsing!)
    let removeItem = toDoItemsArray.find((item) => item.innerText === value); // now we can find the specific item

    // We have to catch the case, if no item was found (the user entered an item-name to remove that is not in the list)
    if (removeItem === undefined) { // if Array.find() doesn't get a match, the return value will be lovely undefined (see documentation)
        alert("This item does not exist!") // we inform the user that he added trash!
        input.value = ""; // helping the user to not repeat his error and clean the value in the input box!
        return; // we leave the function here, as there is nothing else that can be done!
    }

    // if an item was found (the Array.find() got a match), we can just remove this item from the DOM
    removeItem.remove();
};

// add the event listeners to the buttons
addBtn.addEventListener("click", addItem); // the add button receives the addItem function
removeBtn.addEventListener("click", removeItem); // the remove button receives the removeItem function

// Tadaaa, done deal ;)