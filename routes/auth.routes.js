const { Router } = require('express')
const router = Router()
const User = require('../model/User')
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('config')

// /api/auth/register
router.post(
  '/register',
  [
    check('email', 'Uncorrectly email').isEmail(),
    check('password', 'Minimum length of password is 6 symbols').isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    try {
      console.log('Body', req.body)

      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Uncorrecntly registration data',
        })
      }

      const { email, password } = req.body

      const candidate = await User.findOne({ email })

      if (candidate) {
        return res.status(400).json({ message: 'This user already created' })
      }

      const hashePassword = await bcrypt.hash(password, 12)

      const user = new User({ email, password: hashePassword })

      await user.save()

      res.status(201).json({ message: 'User is created' })
    } catch (e) {
      res.status(500).json({ message: 'Somethink wrong, try again' })
    }
  }
)

// /api/auth/login
router.post(
  '/login',
  [
    check('email', 'Input correct email').normalizeEmail().isEmail(),
    check('password', 'Input passwort').exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Uncorretly login details',
        })
      }

      const { email, password } = req.body

      const user = await User.findOne({ email })

      if (!user) {
        return res.status(400).json({ message: 'User is not found' })
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return res.status(400).json({ message: 'Wrong password, try again' })
      }

      const token = jwt.sign({ userId: user.id }, config.get('jwtSecret'), {
        expiresIn: '1h',
      })

      res.json({ token, userId: user.id })
    } catch (e) {
      res.status(500).json({ message: 'Something wrong' })
    }
  }
)

module.exports = router
