function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

document.getElementById("capitalizeWords").addEventListener("click", function () {
  let input = document.getElementById("sentenceInput").value;
  let result = capitalizeWords(input);
  document.getElementById("capitalizedResult").textContent = result;
});