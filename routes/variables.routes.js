const { Router } = require('express')
const router = Router()

router.get('/', async (req, res) => {
  const loc = location.pathname

  res.json({ location: loc })
})

module.exports = router
