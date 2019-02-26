const fs = require('fs')

async function getWords(source) {
  return new Promise((resolve, reject) => {
    fs.readFile(source, (err, data) => {
      if (err) {
        reject(err)
        return
      }
      const dataStr = data.toString()
      const words = dataStr.split('\n')
        .map(line => {
          const [word,] = line.split(' ')
          return word
        })
        .filter(word => !word.includes('_'))
        .map(word => word.replace(/_/g, ' '))
      resolve(words)
    })
  })
}

module.exports = getWords
