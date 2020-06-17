const mongoose = require('mongoose');

var users = mongoose.model('users', {
    name: { 
    	type: String
    	 },
    password: { 
    	type: String
    	 }
    });

module.exports = { users };