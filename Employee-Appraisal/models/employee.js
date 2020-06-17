const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    name: { 
    	type: String
    	 },
    department: { 
    	type: String
    	 },
    date: { 
    	type: String
    	 },
    performance :{
    	type:Number
    },
    salary: { 
    	type: Number 
    }


});

module.exports = { Employee };