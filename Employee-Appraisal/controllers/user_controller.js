const express = require('express');
const bcrypt = require('bcrypt');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { users } = require('../models/user');




router.post('/signup', async (req, res) => {
    console.log("here")
 
    // Check if this user already exisits
    let user = await users.findOne({ email: req.body.name });
    if (user) {
        return res.status(400).send('That user already exisits!');
    } else {
        // Insert the new user if they do not exist yet
        user = new users({
            name: req.body.name,
            password: req.body.password
        });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();
        console.log(user.password)
        res.send(user);
    }
});


router.post('/login', async (req, res) => {
    
    
 
    //  Now find the user by their email address
    console.log(req.body.name);

    let user = await users.findOne({ name: req.body.name });
    console.log(user);
    if (!user) {
        return res.status(400).send('Incorrect name.');
    }
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
        return res.status(400).send('Incorrect password.');
    }
 
    res.send(true);
});

module.exports = router;