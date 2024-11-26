document.getElementById("passwordInput").addEventListener("input", function () {
  let password = this.value;
  let strength = "Weak";

  if (password.length >= 6 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
    strength = "Strong";
  } else if (password.length >= 6) {
    strength = "Moderate";
  }

  document.getElementById("passwordStrength").textContent = "Strength: " + strength;
});