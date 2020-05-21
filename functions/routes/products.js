const express = require('express')
const router = express.Router({ mergeParams: true })

const {
    getAllProducts,
    getSingleProduct,
    addSingleProduct,
    deleteSingleProduct
} = require('../controllers/products')

router.get('/', getAllProducts)
router.get('/:productId', getSingleProduct)
router.delete('/:productId/deleteProduct', deleteSingleProduct)
router.post('/addProduct', addSingleProduct)

module.exports = router
