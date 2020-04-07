const book = {
    title: 'Ego is the Enemy',
    author: 'Rayn Holiday'
}

// Convert Object to JSON
const bookJSON = JSON.stringify(book)
console.log(bookJSON)

// Convert JSON to Object
const parsedData = JSON.parse(bookJSON)
console.log(parsedData.author)