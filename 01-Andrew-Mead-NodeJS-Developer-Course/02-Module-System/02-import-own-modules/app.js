const name = require('./utils')
const add = require('./calc')
const getNotes = require('./notes')

console.log(name)

const sum = add(10, 20)
console.log(sum)

const notes = getNotes() 
console.log(notes)