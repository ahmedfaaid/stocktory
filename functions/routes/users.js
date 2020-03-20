const express = require('express')
const router = express.Router({ mergeParams: true })

const { signup } = require('../controllers/users')

router.get('/signup', signup)

module.exports = router
