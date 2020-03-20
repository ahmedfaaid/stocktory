const { db } = require('../util/admin')

module.exports = {
    async getAllProducts(req, res) {
        try {
            await db
                .collection('users')
                .doc(req.params.userId)
                .collection('products')
                .get()
                .then(productSnapshot => {
                    let products = []

                    productSnapshot.forEach(doc => {
                        products.push({
                            productId: doc.id,
                            productName: doc.data().productName,
                            description: doc.data().description,
                            price: doc.data().price,
                            quantity: doc.data().quantity
                        })
                    })

                    return res.json(products)
                })
                .catch(err => {
                    res.status(500).json({ error: err.code })
                })
        } catch (err) {
            res.status(500).json({ error: err.message })
        }
    },
    async getSingleProduct(req, res) {
        try {
            let productDetails = {}

            db.doc(
                `/users/${req.params.userId}/products/${req.params.productId}`
            )
                .get()
                .then(doc => {
                    if (!doc.exists) {
                        return res
                            .status(404)
                            .json({ error: 'Product not found' })
                    }

                    productDetails = doc.data()
                    productDetails.productId = doc.id

                    return res.json(productDetails)
                })
                .catch(err => {
                    res.status(500).json({ error: err.code })
                })
        } catch (err) {
            res.status(500).json({ error: err.message })
        }
    }
}
