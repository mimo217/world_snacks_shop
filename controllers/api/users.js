// /controllers/api/users.js

const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const checkToken = (req, res) => {
  console.log('req.user', req.user)
  res.json(req.exp)
}
createJWT
const dataController = {
  async create (req, res, next) {
    try {
      const user = await User.create(req.body)
      console.log(req.body)
      // token will be a string
      const token = createJWT(user)
      // send back the token as a string
      // which we need to account for
      // in the client
      res.locals.user = user
      res.locals.token = token
      next()
    } catch (e) {
      console.log('you got a database problem')
      res.status(400).json(e)
    }
  },
  async login (req, res, next) {
    try {
      const user = await User.findOne({ email: req.body.email })
      console.log('findTheOne', user)
      if (!user) throw new Error()
      const match = await bcrypt.compare(req.body.password, user.password)
      console.log(match)
      if (!match) throw new Error()
      // console.log(res)
      res.locals.data = {user, token: createJWT(user)}
      console.log(res.locals)
      // res.locals.data.token = createJWT(user)
      // res.locals.data.user = user
      // res.locals.data.token = createJWT(user)
      console.log('res.locals.data.user', res.locals.data.user)
      console.log('res.locals.data.token', res.locals.data.token)
      next()
    } catch {
      res.status(400).json('Bad Credentials')
    }
  }
}

const apiController = {
  auth (req, res) {
    res.json(res.locals.data.token)
  }
}

module.exports = {
  checkToken,
  dataController,
  apiController
}

/* -- Helper Functions -- */

function createJWT (user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  )
}