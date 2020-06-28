const express = require('express')
const router = express.Router({ mergeParams: true })
const FBAuth = require('../util/fbAuth')

const {
    getAllProducts,
    getSingleProduct,
    addSingleProduct,
    editProduct,
    deleteSingleProduct
} = require('../controllers/products')

router.get('/', FBAuth, getAllProducts)
router.get('/:productId', FBAuth, getSingleProduct)
router.delete('/:productId/deleteProduct', FBAuth, deleteSingleProduct)
router.post('/addProduct', FBAuth, addSingleProduct)
router.post('/:productId/editProduct', FBAuth, editProduct)

module.exports = router
