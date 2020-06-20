const { db } = require('../util/admin')
const { reduceProductDetails } = require('../util/validators')

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
    },
    async addSingleProduct(req, res) {
        const newProduct = {
            productName: req.body.name,
            description: req.body.description,
            price: req.body.price,
            quantity: req.body.quantity
        }

        try {
            await db.doc(`/users/${req.params.userId}`)
                .collection('products')
                .add(newProduct)
                .then(doc => {
                    const resProduct = newProduct
                    resProduct.id = doc.id
                    res.json(resProduct)
                })
                .catch(err => {
                    res.status(500).json({ error: 'Something went wrong' })
                    console.log(err)
                })
        } catch (err) {
            res.status(500).json({ error: err.message })
        }
    },
    async editProduct(req, res) {
        let productDetails = reduceProductDetails(req.body)

        try {
            await db.doc(`/users/${req.params.userId}`)
            .collection('products')
            .doc(req.params.productId)
            .update(productDetails)
            .then(() => {
                return res.json({ message: 'Product updated successfully' })
            })
            .catch(err => {
                res.status(400).json({ error: err.message })
            })
        } catch (err) {
            res.status(500).json({ error: 'Something went wrong' })
        }
    },
    async deleteSingleProduct(req, res) {
        try {
            const product = await db.doc(`/users/${req.params.userId}`)
                .collection('products')
                .doc(req.params.productId)
                
                product.get()
                .then(doc => {
                    if(!doc.exists) {
                        res.status(404).json({ error: 'Product not found' })
                    }

                    return product.delete()
                })
                .then(() => {
                    res.json({ message: 'Product deleted successfully' })
                })
                .catch(err => {
                    console.error(err)
                    return res.status(500).json({ error: err.code })
                })
        } catch (err) {
            console.error(err)
            res.status(500).json({ error: err.message })
        }
    }
}
