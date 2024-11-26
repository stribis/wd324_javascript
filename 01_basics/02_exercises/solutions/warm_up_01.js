// Step 1: Declare variables
let personName = "sdev"
let budget = 100; // Starting budget
let itemPrice = 120; // Item price
let extraIncome = 50; // Extra income received
let discount = 10; // Discount in percentage

// Step 2: Adjust the budget
budget += extraIncome; // Add extra income to the budget

// Step 3: Apply the discount to the item price
let discountedPrice = itemPrice - (itemPrice * (discount / 100));

// Step 4: Check if the budget is enough
if (budget >= discountedPrice) {
    console.log(`${personName} can afford this item for ${itemPrice}$`);
    // Step 5: Check if they have just enough
    if (budget === discountedPrice) {
        console.log(`${personName} has just enough to buy this item for ${itemPrice}$`);
    }
} else {
    console.log(`${personName} cannot afford this item!`);
}