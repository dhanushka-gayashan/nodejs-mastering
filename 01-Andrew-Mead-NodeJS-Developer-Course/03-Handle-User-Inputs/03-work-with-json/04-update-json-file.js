const fs = require('fs')

const personBuffer = fs.readFileSync('person.json')
let personJSON = personBuffer.toString()
const person = JSON.parse(personJSON)

person.name = 'Chamari'
person.age = 32

personJSON = JSON.stringify(person)
fs.writeFileSync('person.json', personJSON)