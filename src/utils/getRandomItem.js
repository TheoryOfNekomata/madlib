function getRandomItem(collection) {
  const randomNumber = Math.floor(Math.random() * collection.length)

  return collection[randomNumber]
}

module.exports = getRandomItem
