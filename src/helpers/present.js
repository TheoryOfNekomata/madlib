const Inflector = require('en-inflectors').Inflectors

function present(verb) {
  return new Inflector(verb).toPresentS()
}

module.exports = present
