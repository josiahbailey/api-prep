const express = require('express')
const helmet = require('helmet')

const server = express()

const characterRouter = require('./api/characters-router')
const showsRouter = require('./api/shows-router')

server.use(express.json())
server.use(helmet())

server.get('/', (req, res) => {
  res.send(`<h2>Welcome to sean's practice server!</h2>`)
})

server.use('/api/characters', characterRouter)
server.use('/api/shows', showsRouter)

module.exports = server