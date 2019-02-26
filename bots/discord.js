const fs = require('fs')
const Discord = require('discord.js')
const madlibsCore = require('../src/core')
const getRandomItem = require('../src/utils/getRandomItem')

const PREFIX = 'madlib!'

function loadErrorResponses() {
  return fs
    .readFileSync('src/ERRORS.txt')
    .toString()
    .split('\n')
}

async function onMessage(msg) {
  const ERROR_RESPONSES = loadErrorResponses()
  let reply
  if (msg.content.startsWith(PREFIX)) {
    const template = msg.content.slice(PREFIX.length)
    try {
      reply = await madlibsCore(template)
    } catch(e) {
      reply = getRandomItem(ERROR_RESPONSES)
    }
  }
  msg.channel.send(reply)
}

function createClient() {
  const client = new Discord.Client()

  client.on('message', onMessage)
  return client
}

require('dotenv').config()

createClient().login(process.env.TOKEN)
