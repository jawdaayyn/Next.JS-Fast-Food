const express = require('express')
const router = express.Router()
const User = require('../models/User')
const jwt = require('jsonwebtoken')

router.get('/', async (req, res) => {
  try {
    let users = await User.find()
    users = users.map((user) => {
      return {
        id: user.id,
        username: user.username,
        email: user.email,
        password: user.password,
        admin: user.admin,
        token: user.token
      }
    })
    res.json(users)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)

    res.json({
      id: user.id,
      username: user.username,
      email: user.email,
      password: user.password,
      admin: user.admin
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

router.post('/', async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      admin: req.body.admin
    })

    await newUser.save()
    res.statusMessage = 'Bravo, vous pouvez maintenant vous connecter !'
    res.status(201).json()
  } catch (err) {
    res.status(500).json({ message: "L'utilisateur n'a pas pu être créé" })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    Object.assign(user, req.body)
    user.save()
    res.send({ data: user })
  } catch {
    res.status(404).send({ message: 'User was not found.' })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    await user.remove()
    res.send({ message: 'User has been deleted.' })
  } catch {
    res.status(404).send({ message: 'User was not found' })
  }
})

router.post('/login', async (req, res) => {
  const { username, password } = req.body

  const user = await User.findOne({ username })
  if (!username || !password) {
    res.statusMessage = 'Both password and username are required'
    res.json({ error: 'Both password and username are required' })
    return 0
  }
  if (!user) {
    res.statusMessage = "User doesn't exist"
    res.json({ error: "User Doesn't Exist" })
    return 0
  }

  if (!user) {
    res.statusMessage = "L'utilisateur n'existe pas"
    res.status(404).json()
    return 0
  }
  if (user.password === password) {
    const token = jwt.sign({ user_id: user._id, username }, process.env.TOKEN_KEY, {
      expiresIn: '10000'
    })

    user.token = token
    user.save()

    res.statusMessage = user._id
    res.status(201).json()
  } else {
    res.statusMessage = 'Wrong Username And Password Combination'
    res.json({ error: 'Wrong Username And Password Combination' })
    return 0
  }
})

module.exports = router
