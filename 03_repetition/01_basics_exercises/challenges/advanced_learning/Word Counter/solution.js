document.getElementById("wordInput").addEventListener("input", function () {
  let text = this.value.trim();
  let words = text ? text.split(/\s+/).length : 0;
  document.getElementById("wordCount").textContent = "Word Count: " + words;
});