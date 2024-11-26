function convertToFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}

document.getElementById("convertButton").addEventListener("click", function () {
  let celsius = parseFloat(document.getElementById("celsiusInput").value);
  let fahrenheit = convertToFahrenheit(celsius);
  document.getElementById("result").textContent = `${celsius}°C = ${fahrenheit}°F`;
});