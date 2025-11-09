// 优化后的 roll 函数，增加参数验证
function roll(min, max, floatFlag = false) {
    if (min >= max) throw new Error('min must be less than max');
    let r = Math.random() * (max - min) + min;
    return floatFlag ? r : Math.floor(r);
}

// 用户名列表
const userNames = ['Davi', 'Dava', 'Davb', 'Davc'];

// 生成用户信息
const user = {
    name: userNames[roll(0, userNames.length)],
    age: roll(12, 65),
    height: Number(roll(5.1, 6.1, true).toFixed(1))
}

console.log('User:', user);

// 产品列表
const possibleProducts = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎", "🍏", "🍐", "🍑", "🍒", "🍓", "🥝", "🍅", "🥥", "🥑", "🍆", "🥔", "🥕", "🌽", "🌶", "🥒", "🥬", "🥦"]

// 生成产品数组
const products = [...Array(5)].map((_, index) => ({
    id: index,
    title: possibleProducts[roll(0, possibleProducts.length)],
    price: parseFloat(roll(1, 10, true).toFixed(2)),
    count: roll(1, 6),
    weight: parseFloat(roll(6, 20, true).toFixed(2)),
}));

console.log('Products:', products);

// 计算购物车总价
const cartTotal = products.reduce((accumulator, product) => {
    return accumulator + product.price * product.count;
}, 0);

console.log('Cart Total:', cartTotal.toFixed(2));

// 计算总重量
const totalWeight = products.reduce((accumulator, product) => {
    return accumulator + product.weight * product.count;
}, 0);

console.log('Total Weight:', totalWeight.toFixed(2));

// 生成随机税率 (5% - 9%)
const taxRate = roll(5, 9, true);

// 计算含税总价
const taxedTotal = cartTotal * (1 + taxRate / 100);

console.log('Tax Rate:', taxRate.toFixed(1) + '%');
console.log('Taxed Total:', taxedTotal.toFixed(2));

// 渲染产品列表
function renderProducts() {
    const productElement = document.getElementById('products');
    if (!productElement) return;

    productElement.innerHTML = products.map(product => `
        <div class="product">
            <div>${product.title}</div>
            <div>💲${product.price.toFixed(2)}</div>
            <div>x ${product.count}</div>
            <div>${product.weight.toFixed(2)}oz</div>
        </div>
    `).join('');
}

// 渲染摘要信息
function renderSummary() {
    const summary = document.getElementById('summary');
    if (!summary) return;

    summary.innerHTML = `
        <div>Total: 💲${cartTotal.toFixed(2)}</div>
        <div>Tax Rate: ${taxRate.toFixed(1)}%</div>
        <div>Taxed Total: 💲${taxedTotal.toFixed(2)}</div>
        <div>Total Weight: ${totalWeight.toFixed(2)}oz</div>
    `;
}

// 初始化渲染
renderProducts();
renderSummary();
