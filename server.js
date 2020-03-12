const express = require('express')
const helmet = require('helmet')

const server = express()

server.use(express.json())
server.use(helmet())

server.get('/', (req, res) => {
  res.send(`<h2>Welcome to sean's practice server!</h2>`)
})

module.exports = server