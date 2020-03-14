const express = require('express')

const router = express.Router()

const Shows = require('../data/helpers/showsModel')

router.post('/', (req, res) => {
  const show = req.body
  Shows.insert(show)
    .then(id => {
      res.status(201).json(id)
    })
    .catch(err => {
      res.status(500).json({ message: 'Unable to add show' })
    })
})

router.get('/', (req, res) => {
  Shows.get()
    .then(shows => {
      res.status(200).json(shows)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Unable to fetch shows' })
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  Shows.get(id)
    .then(show => {
      res.status(200).json(show)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: `Unable to fetch show of id ${id} ` })
    })
})

router.get('/:id/characters', (req, res) => {
  const id = req.params.id
  Shows.getShowsCharacters(id)
    .then(chars => {
      res.status(200).json(chars)
    })
    .catch(err => {
      res.status(500).json({ message: `Unable to fetch characters of show by id of ${id}` })
    })
})

router.put('/:id', (req, res) => {
  const show = req.body
  const id = req.params.id
  Shows.update(id, show)
    .then(x => {
      res.status(203).json({ message: `Show of id ${id} successfully updated`, status: x })
    })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  Shows.remove(id)
    .then(x => {
      res.status(201).json({ message: `Show of id ${id} successfully deleted`, status: x })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: `Unable to delete show of id ${id}` })
    })
})

module.exports = router