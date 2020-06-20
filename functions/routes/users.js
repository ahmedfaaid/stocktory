const express = require('express')
const router = express.Router({ mergeParams: true })

const { signup, login, logout } = require('../controllers/users');

router.get('/signup', signup)
router.get('/login', login)
router.get('/logout', logout)

module.exports = router
