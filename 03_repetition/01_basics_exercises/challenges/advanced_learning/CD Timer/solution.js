document.getElementById("startTimer").addEventListener("click", function () {
  let seconds = parseInt(document.getElementById("timerInput").value);
  let display = document.getElementById("timerDisplay");

  let interval = setInterval(() => {
    if (seconds <= 0) {
      clearInterval(interval);
      display.textContent = "Time's up!";
    } else {
      display.textContent = seconds + " seconds remaining";
      seconds--;
    }
  }, 1000);
});