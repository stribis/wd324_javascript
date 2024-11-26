# Budget Checker with Operations

You are tasked with building a program that checks if a person can afford an item based on their budget. The program will also consider any potential adjustments to the budget and the price using addition and subtraction.

### Instructions:

1. Declare the following variables:
   - the name of a person. 
   - a number that represents the person’s current budget.
   - a number that represents the price of the item they want to buy.
   - a number representing additional money the person receives (e.g., a bonus or gift) aka extra income.
   - a number representing the percentage discount on the item, not the static amount!

2. **Adjust the Budget**: 
   - Add the additional to the budget` (this simulates the person getting more money).
   
3. **Apply the Discount**:
   - Calculate the discounted price of the item using the discount. 
    - For example, if the discount is 20%, the discounted price will be `price - (20% of price)` write it programmatically ;-)
   
4. **Check if the budget is enough**: 
   - If the adjusted budget (after adding extra Income) is greater than or equal to the discounted price, print a message: `<person name> can afford this item for <product price>$`
   - If the adjusted budget is less than the discountedPrice, print a message: `<person name> cannot afford this item for <product price>$`

5. **Additional Check**: 
   - If the budget after adding extra income is **exactly** equal to the discounted price, print the message: `<person name> has just enough to buy this item!"`

### Bonus Challenge (Optional):
- log the missing or excess money into the console
- log the necessary change of discount to make the product affordable, if the person can't afford it.

### Example Output:
- For `personName = Hans`, `budget = 100`, `price = 120`, `extraIncome = 50`, and `discount = 10` (10%), the output should be:
  - `"Hans can afford this item for 120$"`
  - Because the `discountedPrice` will be `120 - (120 * 0.1) = 108`, and the adjusted `budget` will be `100 + 50 = 150`.

- For `personName = Hans`, `budget = 80`, `itemPrice = 90`, `extraIncome = 20`, and `discount = 10` (10%), the output should be:
  - `"Hans cannot afford this item for 90$"`
  - Because the `discountedPrice` will be `90 - (90 * 0.1) = 81`, and the adjusted `budget` will be `80 + 20 = 100`.

---