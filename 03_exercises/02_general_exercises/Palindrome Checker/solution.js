function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

document.getElementById("checkPalindrome").addEventListener("click", function () {
  let input = document.getElementById("palindromeInput").value;
  let result = isPalindrome(input) ? "Yes, it's a palindrome!" : "No, it's not a palindrome.";
  document.getElementById("palindromeResult").textContent = result;
});