// creating an empty array
let todoList = [];

// call the getTodos function, to get the todos from the local storage
getTodos();

// getTodos function
function getTodos() {
  // the single point of truth for the todo list is the local storage
  // that's why we're checking, if there are any existing todos in the local storage
  /*
    SYNTAX:
    Get:
    localStorage.getItem(key) // if you're searching for a key in the local storage, you only need to pass the key, the key needs to be a string

    Setting:
    localStorage.setItem(key, value) // if you're setting a key in the local storage, you need to pass the key and the value

    Deleting:
    localStorage.removeItem(key) // if you're deleting a key in the local storage, you only need to pass the key
   */
  if (localStorage.getItem("todos")) {
    // if there are any existing todos in the local storage
    // we're going to parse the JSON string, and store it into the todoList array
    todoList = JSON.parse(localStorage.getItem("todos"));
    // updating the DOM so that the todo list is displayed
    populateTodoList();
  }
}

/*
    1. add an click eventListener to the addButon
    2. whenever you add something, it should not reload the page
    3. call the function addTodo()
*/
document.querySelector("#addbutton").addEventListener("click", (event) => {
  // prevent default disables the default behavior of the submit button
  // inside a form, so that the form doesn't reload the page
  event.preventDefault();
  addTodo();
});

// addTodo function
function addTodo() {
  // add the todo into a new variable, if the input is not empty
  const newTodo = document.querySelector("#addinput").value.trim();

  /* IF
    if the input is not empty, we create a new object
    the noew object has the variable name of todoObject, and the values are:
    text of the new todo, and the completed status of false

    we're also going to push the new todo into the todoList array

    and now we're updating the local storage with the content of the todoList

    finally, we're going to update the DOM with the new todo -> populateTodoList

    and then we'll need to reset the input that the input is empty -> ""
    */
  /* ELSE
   if the input is empty, we'll need to alert the user that the input is empty
   and it needs to be filled
   */

  // if the newTodo is not an empty string
  if (newTodo !== "") {
    // here we're creating a new object
    const todoObject = {
      text: newTodo,
      complete: false,
    };

    // now we're going to push the new object into the todoList array
    todoList.push(todoObject);

    // now we're updating the local storage with the content of the todoList
    localStorage.setItem("todos", JSON.stringify(todoList));

    // now we're updating the dom with the populateTodoList function
    populateTodoList();

    // reset the input of the form to an empty string
    document.querySelector("#addinput").value = "";
  } else {
    // if the input is empty, we'll need to alert the user that the input is empty
    alert("Please fill in the input");
  }
}

// populateTodoList function
function populateTodoList() {
  // 1. reset the list, so that we can't add the same todo twice
  // this is the div element, where all the todo's are being displayed
  const list = document.querySelector("#list");
  list.innerHTML = "";

  /*
    IF-CONDITION -> if the todoList is not empty

    FOR EACH START
    2. iterate through the todoList with the help of a forEach function, which creates a div-todoWrapper
    and add the class todoWrapper to the div
    3. check if the todo is completed, if it's completed, add the classList "marked"
    4. add an innerHTML to the todoWrapper. The innerHTML should have a span element with the classname
    of todoText and the content of todo.text, and also a span element with the className todoCheck with the conditional
    check if the todo.complete is completed or false.
    5. add the todoWrapper into the list as a child
    FOR EACH END

    IF-CONDITION END

    6. call the function updateBoxes(), which we will create in the future
    */
  // check if the todoList is not empty
  if (todoList.length > 0) {
    // for each todo in the todoList
    todoList.forEach((todo, index) => {
      // create a todoWrapper
      const todoWrapper = document.createElement("div");
      // add a className of todoWrapper to the div
      todoWrapper.classList.add("todoWrapper");

      // check if a todo is complete
      if (todo.complete) {
        // add the className "marked" to the todoWrapper
        todoWrapper.classList.add("marked");
      }
      // innerHTML of todoWrapper
      todoWrapper.innerHTML = `
      <div class="todoText">${todo.text}</div>
      <div class="todoCheck ${todo.complete ? "complete" : "false"}" data-index="${index}"></div>
    `;
      // add all the existing todoWrappers to the previous emptied list
      list.appendChild(todoWrapper);
    });
  }
  updateCheckBoxes();
}

// updateCheckboxes function
function updateCheckBoxes() {
  let checkBoxes = document.querySelectorAll(".todoCheck");
  // 1. iterate through every checkbox and add an eventListener to it
  checkBoxes.forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
      // 2. save the index of the current iteration into a new index variable with the help
      // of the data-index
      const index = checkbox.getAttribute("data-index");
      // 3. toggle the todo with the help of the index false-true
      todoList[index].complete = !todoList[index].complete;
      // 4. update the local storage
      localStorage.setItem("todos", JSON.stringify(todoList));
      // 5. update the dom with populateTodoList
      populateTodoList();
    });
  });
}

// clear completed button event listener,
document.querySelector("#clearCompleted").addEventListener("click", (event) => {
  event.preventDefault();
  // we filter all todos, that are not completed
  // the new list only contains the todos that are not completed
  // you can achieve that with the help of the .filter() method and by returning only the incompleted todos
  todoList = todoList.filter((todo) => !todo.complete);

  // update the local storage
  localStorage.setItem("todos", JSON.stringify(todoList));

  // update the dom with populateTodoList
  populateTodoList();
});

// mark all as complete button event listener
document.querySelector("#markAsComplete").addEventListener("click", (event) => {
  event.preventDefault();
  // we iterate through all todos and set them to completed
  // this can be done with the help of the .map() method
  //and inside the map method we return a new object with the help of the spread operator
  // the spread operator copies all keys and values from an object into a new object
  todoList = todoList.map((todo) => ({ ...todo, complete: true }));

  // update the local storage
  localStorage.setItem("todos", JSON.stringify(todoList));

  // update the dom with populateTodoList
  populateTodoList();
});

/*
  1. We created an empty array, which is called todoList
  2. We're calling the function getTodos(), which is going to get all the todos from the local storage
  as long as there are any existing todos
  3. If there is a todos key, we're getting the value of the todos key and store the values into the todoList array
  4. One of two most important functions is the populateTodoList function, which is always keeping the DOM up to date
  In every function, we're always calling the populateTodoList function
  5. In the populateTodoList function, there is an updateCheckboxes function, which is keeping the checkboxes of every todo up to date
  Here we can also toggle the complete status of the todo
*/
