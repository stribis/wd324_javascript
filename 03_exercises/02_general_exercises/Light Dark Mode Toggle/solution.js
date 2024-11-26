document.getElementById("toggleMode").addEventListener("click", function () {
  let body = document.body;
  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
  }
});