/* 
---------------------------------------------------------------------------------------
NOTE: Remember that all routes on this page are prefixed with `localhost:3000/api/users`
---------------------------------------------------------------------------------------
*/

/* Require modules
--------------------------------------------------------------- */
const jwt = require('jwt-simple')
const express = require('express')
// Router allows us to handle routing outside of server.js
const router = express.Router()

/* Require the db connection and models
--------------------------------------------------------------- */
const db = require('../models')


/* Require the JWT config
--------------------------------------------------------------- */
const config = require('../../jwt.config.js')
const { prependOnceListener } = require('../models/comment.js')


/* ROUTES
--------------------------------------------------------------- */
// Route for users to create an account
router.post('/signup', (req, res) => {
    // Create a new user in the database
    db.User.create(req.body)
        .then(user => {
            // after successfully creating a user, assign a JWT to the user and send it in the response object
            console.log(user)
            const token = jwt.encode({ id: user.id }, config.jwtSecret)
            res.json({ token: token })
        })
        // sends error if the database fails to create a new user
        .catch(() => {
            res.status(401)
                .json({ message: 'Could not create a new account, please try again' })
        })
})

// Route for user to log into their account
router.post('/login', async (req, res) => {
    // attempt to find the user by their email
    const foundUser = await db.User.findOne({ email: req.body.email })

    if (foundUser && foundUser.password === req.body.password) {
        const payload = { id: foundUser.id }
        const token = jwt.encode(payload, config.jwtSecret)
        res.json({
            token: token,
            email: foundUser.email
        })
    } else {
        res.status(401)
            .json({ message: 'Could not find user with that email/password'})
    }
})


/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router