const Inflector = require('en-inflectors').Inflectors

function pastParticiple(verb) {
  return new Inflector(verb).toPastParticiple()
}

module.exports = pastParticiple
