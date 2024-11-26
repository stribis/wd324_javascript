document.getElementById("generateButton").addEventListener("click", function () {
  let number = parseInt(document.getElementById("numberInput").value);
  let table = document.getElementById("multiplicationTable");
  table.innerHTML = ""; // Clear previous table

  for (let i = 1; i <= 10; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = `${number} x ${i} = ${number * i}`;
    table.appendChild(listItem);
  }
});