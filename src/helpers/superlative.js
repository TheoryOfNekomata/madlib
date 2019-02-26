const Inflector = require('en-inflectors').Inflectors

function superlative(adj) {
  return new Inflector(adj).superlative()
}

module.exports = superlative
