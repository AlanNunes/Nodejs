const fs = require('fs')

// const book = {
//     title: 'The Pragmatic Programmer',
//     author: 'Andy Hunt'
// }

// const bookJson = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJson)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJson = dataBuffer.toString()
const book = JSON.parse(dataJson)

book.author = 'Andy H.'

const userJson = JSON.stringify(book)
fs.writeFileSync('1-json.json', userJson)