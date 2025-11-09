# Shopping Cart 🛒

An interactive shopping cart demo application built with vanilla JavaScript that showcases practical frontend mathematical calculations.

## Features

- 🎲 Random user information generation (name, age, height)
- 🍎 Auto-generated shopping cart with emoji products
- 💰 Real-time calculation of cart total (including taxes)
- ⚖️ Calculation of total product weight
- 🎨 Responsive design and modern interface

## Tech Stack

- **HTML5** - Page structure
- **CSS3** - Styling and layout
- **Vanilla JavaScript** - Interactivity and functionality
  - Using `reduce()` for cumulative calculations
  - Using `map()` to render product lists
  - Using `Math.random()` to generate random data

## How It Works

This project demonstrates how to solve practical problems using mathematical operations in the frontend:

1. **Random Number Generator**: Custom [roll()](file:///home/elidavi/WebstormProjects/shoppingcart/index.js#L1-L6) function to generate random integers or floats within a specified range
2. **Shopping Cart Calculations**:
   - Product total calculation: Using the `reduce()` method to accumulate the price × quantity of all products
   - Tax calculation: Randomly generating a tax rate of 5%-9% and applying it to the total
   - Total weight calculation: Using the `reduce()` method to accumulate the weight × quantity of all products
3. **Dynamic Rendering**: Dynamically updating DOM elements with JavaScript to display products and summary information

## Installation and Running

1. Clone this repository to your local machine:
```bash
git clone <repository-url>
```

2. Navigate to the project directory:
```bash
cd shoppingcart
```

3. Open the `index.html` file in your browser, or start the application using a local server:
```bash
npx serve
```

## Code Example

```javascript
// Calculate shopping cart total
const cartTotal = products.reduce((accumulator, product) => {
    return accumulator + product.price * product.count;
}, 0);

// Generate random tax rate (5% - 9%)
const taxRate = roll(5, 9, true);

// Calculate taxed total
const taxedTotal = cartTotal * (1 + taxRate / 100);
```

## Learning Value

This project can help you learn:

- How to perform mathematical calculations in the frontend
- Practical applications of JavaScript array methods like `reduce()` and `map()`
- DOM manipulation and dynamic content rendering
- Random number generation and data simulation
- CSS Flexbox layout practice

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

author: Qingxia Li
