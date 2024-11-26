document.getElementById("textInput").addEventListener("input", function () {
  let count = this.value.length;
  document.getElementById("charCount").textContent = "Character Count: " + count;
});