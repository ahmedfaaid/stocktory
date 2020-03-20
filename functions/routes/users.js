const express = require('express')
const router = express.Router({ mergeParams: true })

const { signup, login } = require('../controllers/users')

router.get('/signup', signup)
router.get('/login', login)

module.exports = router
