const express = require('express')
const router = express.Router()
const Kebab = require('../models/Kebab')

router.get('/', async (req, res) => {
  try {
    let kebabs = await Kebab.find()
    kebabs = kebabs.map((kebab) => {
      return {
        id: kebab.id,
        name: kebab.name,
        description: kebab.description,
        hp: kebab.hp,
        regeneration: kebab.regeneration,
        mana: kebab.mana,
        range: kebab.range,
        armor: kebab.armor,
        magic_resistance: kebab.magic_resistance,
        speed: kebab.speed,
        price: kebab.price,
        image: kebab.image,
        recommandation: kebab.recommandation
      }
    })
    res.json(kebabs)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const kebab = await Kebab.findById(req.params.id)

    res.json({
      id: kebab.id,
      name: kebab.name,
      description: kebab.description,
      hp: kebab.hp,
      regeneration: kebab.regeneration,
      mana: kebab.mana,
      range: kebab.range,
      attack_damage: kebab.attack_damage,
      armor: kebab.armor,
      magic_resistance: kebab.magic_resistance,
      speed: kebab.speed,
      price: kebab.price,
      image: kebab.image,
      recommandation: kebab.recommandation
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

router.post('/', async (req, res) => {
  try {
    const newKebab = new Kebab({
      name: req.body.name,
      description: req.body.description,
      hp: req.body.hp,
      regeneration: req.body.regeneration,
      mana: req.body.mana,
      range: req.body.range,
      attack_damage: req.body.attack_damage,
      armor: req.body.armor,
      magic_resistance: req.body.magic_resistance,
      speed: req.body.speed,
      price: req.body.price,
      image: req.body.image,
      recommandation: req.body.recommandation
    })
    await newKebab.save()

    res.status(201).json({ message: 'Ce kebab a bien été créé.' })
  } catch (err) {
    res.status(500).json(err)
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const kebab = await Kebab.findById(req.params.id)
    Object.assign(kebab, req.body)
    kebab.save()
    res.send({ data: kebab })
  } catch {
    res.status(404).send({ message: 'Kebab was not found.' })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const kebab = await Kebab.findById(req.params.id)
    await kebab.remove()
    res.send({ message: 'Kebab has been deleted.' })
  } catch {
    res.status(404).send({ message: 'Kebab was not found' })
  }
})

module.exports = router
