const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const {label:productLabel, price, reading, sold = 5} = product

console.log(productLabel)
console.log(price)
console.log(reading)
console.log(sold)


//=============================================================

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)
