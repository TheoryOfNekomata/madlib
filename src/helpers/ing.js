const Inflector = require('en-inflectors').Inflectors

function ing(verb) {
  return new Inflector(verb).toGerund()
}

module.exports = ing
