const Inflector = require('en-inflectors').Inflectors

function plural(noun) {
  return new Inflector(noun).toPlural()
}

module.exports = plural
