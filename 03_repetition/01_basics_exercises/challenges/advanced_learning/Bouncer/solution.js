function canEnterClub(age, hasCard) {
    if (age >= 21 && hasCard) {
      return "Allowed";
    } else {
      return "Denied";
    }
  }

  let input = document.getElementById("ageInput");
  document.getElementById("checkButton").addEventListener("click", function () {
    let result = canEnterClub(input.value, true); // Change these values to test

    document.getElementById("result").textContent = result;
  });