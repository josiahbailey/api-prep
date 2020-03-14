const express = require('express')

const router = express.Router()

const Characters = require('../data/helpers/charactersModel')

router.post('/', (req, res) => {
  const char = req.body
  Characters.insert(char)
    .then(id => {
      res.status(201).json(id)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Unable to fetch characters' })
    })
})

router.get('/', (req, res) => {
  Characters.get()
    .then(chars => {
      res.status(200).json(chars)
    })
    .catch(err => {

    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
})

router.put('/:id', (req, res) => {
  const id = req.params.id
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
})

module.exports = router