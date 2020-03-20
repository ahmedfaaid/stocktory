const admin = require('firebase-admin')

const serviceAccount = require('../stocktoryServiceAccount.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://stocktory-43055.firebaseio.com',
    storageBucket: 'stocktory-43055.appspot.com'
})

const db = admin.firestore()

module.exports = { admin, db }
