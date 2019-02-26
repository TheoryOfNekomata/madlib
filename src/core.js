const handlebars = require('handlebars')

const SOURCES = {
  'adj': 'dict/index.adj',
  'adv': 'dict/index.adv',
  'noun': 'dict/index.noun',
  'verb': 'dict/index.verb',
}

const comparative = require('./helpers/comparative')
const ing = require('./helpers/ing')
const past = require('./helpers/past')
const pastParticiple = require('./helpers/pastParticiple')
const plural = require('./helpers/plural')
const present = require('./helpers/present')
const superlative = require('./helpers/superlative')

const getWords = require('./utils/getWords')
const getRandomItem = require('./utils/getRandomItem')
const getRequiredWordLists = require('./utils/getRequiredWordLists')

function registerHelpers() {
  handlebars.registerHelper('comparative', comparative)
  handlebars.registerHelper('ing', ing)
  handlebars.registerHelper('gerund', ing)
  handlebars.registerHelper('past', past)
  handlebars.registerHelper('pastParticiple', pastParticiple)
  handlebars.registerHelper('plural', plural)
  handlebars.registerHelper('present', present)
  handlebars.registerHelper('superlative', superlative)
}

async function getRandomWordsForTemplate(templateString) {
  const requirements = getRequiredWordLists(templateString)
  const posArray = Object.keys(requirements)
  const wordLists = await Promise.all(
    posArray
      .map((pos) => getWords(SOURCES[pos]))
  )
  return posArray.reduce(
    (w, pos, index) => {
      const theWords = w
      const posWords = []
      for (let i = 0; i <= requirements[pos]; i += 1) {
        posWords.push(getRandomItem(wordLists[index]))
      }
      if (!(theWords[pos] instanceof Array)) {
        theWords[pos] = posWords
      }
      return theWords
    },
    {},
  )
}

async function madlibsCore(templateString) {
  let madlib = ''

  // TODO selectively register required helpers
  registerHelpers()

  try {
    const builder = handlebars.compile(templateString)
    const words = await getRandomWordsForTemplate(templateString)
    madlib = builder(words)
  } catch (e) {
    throw new Error('Cannot create madlib.')
  }

  return madlib
}

module.exports = madlibsCore
