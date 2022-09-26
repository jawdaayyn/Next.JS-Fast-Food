const express = require('express')
const router = express.Router()
const Dessert = require('../models/Dessert')

router.get('/', async (req, res) => {
  try {
    let desserts = await Dessert.find()
    desserts = desserts.map((dessert) => {
      return {
        id: dessert.id,
        name: dessert.name,
        description: dessert.description,
        hp: dessert.hp,
        price: dessert.price,
        image: dessert.image
      }
    })
    res.json(desserts)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const dessert = await Dessert.findById(req.params.id)

    res.json({
      id: dessert.id,
      name: dessert.name,
      description: dessert.description,
      price: dessert.price,
      image: dessert.image
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

router.post('/', async (req, res) => {
  try {
    const newDessert = new Dessert({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image
    })

    await newDessert.save()

    res.status(201).json({ message: 'Ce dessert a bien été créé.' })
  } catch (err) {
    res.status(500).json(err)
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const dessert = await Dessert.findById(req.params.id)
    Object.assign(dessert, req.body)
    dessert.save()
    res.send({ data: dessert })
  } catch {
    res.status(404).send({ message: 'Dessert was not found.' })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const dessert = await Dessert.findById(req.params.id)
    await dessert.remove()
    res.send({ message: 'Dessert has been deleted.' })
  } catch {
    res.status(404).send({ message: 'Dessert was not found' })
  }
})

module.exports = router
