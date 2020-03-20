const express = require('express')
const router = express.Router({ mergeParams: true })

const { getAllProducts, getSingleProduct } = require('../controllers/products')

router.get('/', getAllProducts)
router.get('/:productId', getSingleProduct)

module.exports = router
