const Inflector = require('en-inflectors').Inflectors

function past(verb) {
  return new Inflector(verb).toPast()
}

module.exports = past
