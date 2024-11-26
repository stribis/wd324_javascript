function reverseString(str) {
  return str.split("").reverse().join("");
}

document.getElementById("reverseButton").addEventListener("click", function () {
  let input = document.getElementById("stringInput").value;
  let reversed = reverseString(input);
  document.getElementById("reversedText").textContent = reversed;
});