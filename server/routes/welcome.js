const express = require('express')

const router = express.Router()

// GET /api/v1/welcome/
router.get('/', (req, res) => {
  try {
    res.json({
      statement: 'Ayo wassup Kanye, I heard you like liked Bobs Burgers!',
    })
  } catch (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router
