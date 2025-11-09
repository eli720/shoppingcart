// create the roll function form random values
function roll(min, max, floatFlag) {
    let r = Math.random() * (max - min) + min;
    return floatFlag ? r : Math.floor(r);
}

// user name list
const userNames = ['Davi', 'Dava', 'Davb', 'Davc'];

// Ages between 12 and 64
// Heights between 5.1 and 6 meters

// generate users
const user = {
    name:userNames[roll(0, userNames.length)],
    age:roll(12, 65),
    height: Number(roll(5.1, 6.1, true).toFixed(1))
}

console.log(user);

let possibleProducts = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎", "🍏", "🍐", "🍑", "🍒", "🍓", "🥝", "🍅", "🥥", "🥑", "🍆", "🥔", "🥕", "🌽", "🌶", "🥒", "🥬", "🥦"]

// let products = [...Array(5)].map((_,i) => ({

// }))
const products = [...Array(5)].map((_,index) => {
    return {
        index,
        title: possibleProducts[roll(0, possibleProducts.length)],
        price: roll(1, 10, true).toFixed(2),
        count: roll(1, 6),
        weight: roll(6, 20, true).toFixed(2),
    }
});

console.log(products);

// Calculate the Cart Total using .reduce
const cartTotal = products.reduce((accumulator, product) => {
    return accumulator + parseFloat(product.price) * product.count;
}, 0).toFixed(2);

console.log(cartTotal);

// Calculate the Weight Total using .reduce
const totalWeight = products.reduce((accumulator, product) => {
    return accumulator + parseFloat(product.weight) * product.count;
}, 0).toFixed(2);

console.log(totalWeight);

// roll() for a random Tax Rate between 5% and 9%
// rounding to the nearest 10th
const taxRate = roll(5, 9, true).toFixed(1);

// Apply that Tax Rate to the Cart Total
const taxed = () => taxRate / 100 * cartTotal + parseFloat(cartTotal)

const taxedTotal = taxed().toFixed(2);

console.log(taxed());

// mount the products
let productElement = document.getElementById('products');
let cartHtml = '';

products.forEach(product => {
    cartHtml += `
    <div class="product">
        <div>${product.title}</div>
        <div>💲${product.price}</div>
        <div>x ${product.count}</div>
        <div>${product.weight}oz</div>
    </div>
    `
})

productElement.innerHTML = cartHtml;

// mount the summary
let summary = document.getElementById('summary');
let summaryHtml = '';

summaryHtml += `<div>Total: 💲${cartTotal}</div>`
summaryHtml += `<div>Tax Rate: 💲${taxRate}%</div>`
summaryHtml += `<div>Taxed Total: 💲${taxedTotal}</div>`
summaryHtml += `<div>Total Weight: ${totalWeight}oz</div>`

summary.innerHTML = summaryHtml;