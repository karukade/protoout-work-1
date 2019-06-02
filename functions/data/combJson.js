const fs = require('fs')
const a = require('./chinese-translated.json.js')
const b = require('./chinese')

const combed = a.reduce((list, item, index) => {
  const res = {
    text: b[index],
    translated: item
  }
  list.push(res)
  return list
} , [])

fs.writeFileSync('./chinese-result.json', JSON.stringify(combed))

