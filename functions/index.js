const functions = require('firebase-functions')
const express = require('express')

const productRouter = require('./routes/products')
const userRouter = require('./routes/users')

const app = express()

app.use('/users', userRouter)
app.use('/users/:userId/products', productRouter)

exports.api = functions.https.onRequest(app)
