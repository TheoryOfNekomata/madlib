const Inflector = require('en-inflectors').Inflectors

function comparative(adj) {
  return new Inflector(adj).comparative()
}

module.exports = comparative
