const express = require('express')
const router = express.Router()
const Boisson = require('../models/Boisson')

router.get('/', async (req, res) => {
  try {
    let boissons = await Boisson.find()
    boissons = boissons.map((boisson) => {
      return {
        id: boisson.id,
        name: boisson.name,
        description: boisson.description,
        hp: boisson.effect.hp,
        regeneration: boisson.effect.regeneration,
        mana: boisson.effect.mana,
        range: boisson.effect.range,
        attack_damage: boisson.effect.attack_damage,
        attack_speed: boisson.effect.attack_speed,
        armor: boisson.effect.armor,
        magic_resistance: boisson.effect.magic_resistance,
        speed: boisson.effect.speed,
        price: boisson.price,
        image: boisson.image
      }
    })
    res.json(boissons)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const boisson = await Boisson.findById(req.params.id)

    res.json({
      id: boisson.id,
      name: boisson.name,
      description: boisson.description,
      hp: boisson.effect.hp,
      regeneration: boisson.effect.regeneration,
      mana: boisson.effect.mana,
      range: boisson.effect.range,
      attack_damage: boisson.effect.attack_damage,
      attack_speed: boisson.effect.attack_speed,
      armor: boisson.effect.armor,
      magic_resistance: boisson.effect.magic_resistance,
      speed: boisson.effect.speed,
      price: boisson.price,
      image: boisson.image
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

router.post('/', async (req, res) => {
  try {
    const newBoisson = new Boisson({
      name: req.body.name,
      description: req.body.description,
      hp: req.body.effect.hp,
      regeneration: req.body.effect.regeneration,
      mana: req.body.effect.mana,
      range: req.body.effect.range,
      attack_damage: req.body.effect.attack_damage,
      attack_speed: req.body.effect.attack_speed,
      armor: req.body.effect.armor,
      magic_resistance: req.body.effect.magic_resistance,
      speed: req.body.effect.speed,
      price: req.body.price,
      image: req.body.image
    })

    await newBoisson.save()

    res.status(201).json({ message: 'Cette boisson a bien été ajoutée.' })
  } catch (err) {
    res.status(500).json(err)
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const boisson = await Boisson.findById(req.params.id)
    Object.assign(boisson, req.body)
    boisson.save()
    res.send(boisson)
  } catch {
    res.status(404).send({ message: 'Boisson was not found.' })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const boisson = await Boisson.findById(req.params.id)
    await boisson.remove()
    res.send({ message: 'Boisson has been deleted.' })
  } catch {
    res.status(404).send({ message: 'Boisson was not found' })
  }
})

module.exports = router
