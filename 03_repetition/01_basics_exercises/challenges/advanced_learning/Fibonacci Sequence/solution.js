function generateFibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib.slice(0, n);
}

document.getElementById("generateFib").addEventListener("click", function () {
  let n = parseInt(document.getElementById("fibInput").value);
  document.getElementById("fibResult").textContent = generateFibonacci(n).join(", ");
});