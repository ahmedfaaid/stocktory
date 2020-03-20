const functions = require('firebase-functions')
const express = require('express')

const productRouter = require('./routes/products')

const app = express()

app.use('/users/:userId/products', productRouter)

exports.api = functions.https.onRequest(app)
