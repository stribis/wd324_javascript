function calculateTotal(prices) {
    let total = 0;
    for (let price of prices) {
      total += price;
    }
    return total;
  }

  let input = document.getElementById("priceInput");
  const pricesString = input.value.split(",")
  prices = pricesString.map(price => parseInt(price))
  const total = calculateTotal(prices);
  document.getElementById("total").textContent = "Total: $" + total;