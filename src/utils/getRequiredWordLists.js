const p = /{{(.*?)}}/g

function getRequiredWordLists(string) {
  let matchString = string
  const tags = []

  while (matchString !== null) {
    const theMatch = p.exec(matchString)
    if (theMatch === null) {
      break
    }
    const [lastMatchString, rawTag] = theMatch
    const tag = rawTag.trim().replace(/\s+/, ' ')
    if (tag.length > 0) {
      tags.push(tag)
    }
    matchString = matchString.slice(matchString.index + lastMatchString.length)
  }

  return tags.reduce(
    (wordList, tag) => {
      const theWordList = wordList
      const tagFragments = tag.split(' ')
      const tagFragmentsR = tagFragments.reduce((r, f) => [f, ...r], [])
      const [posTag, ] = tagFragmentsR
      const [pos, rawId = '[0]'] = posTag.split('.')
      const id = Number(rawId.replace(/[^0-9]/g, ''))

      if (typeof wordList[pos] !== 'number') {
        theWordList[pos] = 0
      }

      if (theWordList[pos] < id) {
        theWordList[pos] = id
      }

      return theWordList
    },
    {}
  )
}

module.exports = getRequiredWordLists
