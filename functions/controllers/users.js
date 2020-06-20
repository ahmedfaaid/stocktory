const { db } = require('../util/admin')
const config = require('../util/config')

const firebase = require('firebase')
firebase.initializeApp(config)

const { validateSignupData, validateLoginData } = require('../util/validators')

module.exports = {
    async signup(req, res) {
        try {
            const newUser = {
                firstName: req.body.firstName,
                lastName: req.body.firstName,
                email: req.body.email,
                password: req.body.password,
                confirmPassword: req.body.confirmPassword
            }

            const { valid, errors } = validateSignupData(newUser)

            if (!valid) return res.status(400).json(errors)

            let token, userId

            const signupUser = await firebase
                .auth()
                .createUserWithEmailAndPassword(newUser.email, newUser.password)
                .then(data => {
                    userId = data.user.uid

                    return data.user.getIdToken()
                })
                .then(idToken => {
                    token = idToken

                    const userCredentials = {
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email
                    }

                    db.collection('users')
                        .doc(userId)
                        .set(userCredentials)
                        .then(addedUser => {
                            return res.status(201).json({ token })
                        })
                })
                .catch(err => {
                    console.log(err)
                    if (err.code === 'auth/email-already-in-use') {
                        return res
                            .status(400)
                            .json({ email: 'Email is already in use' })
                    } else {
                        res.status(500).json({
                            general: 'Something went wrong. Please try again.'
                        })
                    }
                })

            return signupUser
        } catch (err) {
            res.status(500).json({ error: err.message })
        }
    },
    async login(req, res) {
        const user = {
            email: req.body.email,
            password: req.body.password
        }

        const { valid, errors } = validateLoginData(user)

        if (!valid) return res.status(400).json(errors)

        try {
            await firebase
            .auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .then(data => {
                return data.user.getIdToken()
            })
            .then(token => {
                return res.json({ token })
            })
            .catch(err => {
                console.err(err)
                return res
                    .status(403)
                    .json({ general: 'Wrong credentials, please try again' })
            })
        } catch (err) {
            res.status(500).json({ error: err.message })
        }
    },
    // might not be necessary and logout will be handled in client
    async logout(req, res) {
        try {
            await firebase
                .auth()
                .signOut()
                .then(() => {
                    return res.status(200).json({ message: 'Successfully signed out' })
                })
                .catch(err => {
                    console.log(err)
                    return res.status(400).json({ err: err.message })
                })
        } catch (err) {
            res.status(500).json({ general: 'Something went wrong!' })
        }
    }
}
