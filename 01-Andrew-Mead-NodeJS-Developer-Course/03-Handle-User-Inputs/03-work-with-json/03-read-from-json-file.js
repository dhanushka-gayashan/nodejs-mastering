const fs = require('fs')

const bookBuffer = fs.readFileSync('book.json')
console.log(bookBuffer)

const bookJSON = bookBuffer.toString()
console.log(dataJSON)

const book = JSON.parse(bookJSON)
console.log(book)
