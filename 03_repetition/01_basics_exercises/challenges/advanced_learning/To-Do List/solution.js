document.getElementById("addTask").addEventListener("click", function () {
  let task = document.getElementById("todoInput").value;
  if (task) {
    let listItem = document.createElement("li");
    listItem.textContent = task;
    document.getElementById("todoList").appendChild(listItem);
    document.getElementById("todoInput").value = "";
  }
});