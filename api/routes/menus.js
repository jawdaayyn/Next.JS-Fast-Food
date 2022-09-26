const express = require('express')
const router = express.Router()
const kebab = require('../models/Kebab')
const dessert = require('../models/Dessert')
const boisson = require('../models/Boisson')

router.get('/', async (req, res) => {
  try {
    let kebabs = await kebab.find()
    let desserts = await dessert.find()
    let boissons = await boisson.find()
    
    res.json({
      id: kebabs.id,
      iddessert: desserts.id,
      idboissons: boissons.id
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
