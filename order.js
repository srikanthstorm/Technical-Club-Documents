var mongoose = require('mongoose');
//Defining Schema
var orderSchema = mongoose.Schema({


    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    mob: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    pincode: {
        type: String,
        required: true
    }
});

var stu = module.exports = mongoose.model('order', orderSchema); //Binding schema 

module.exports.addStudent = function(data, callback) {
    stu.create(data, callback);
}
module.exports.getStudentByField = function(ret, callback) {
    stu.find({name:ret}, callback);
}
module.exports.updateStudent = function(name, data, options, callback) {
    var query = {
        name: name
    };
    var update = {
        name: data.name,
        email: data.email,
        mob: data.mob,
        city: data.city,
        pincode: data.pincode
    }
    stu.findOneAndUpdate(query, update, options, callback);
}
module.exports.removeStudent = function (name, callback) {
    var query = {
        name: name
    };
    stu.remove(query, callback);
}
module.exports.getDetails = function(callback) {
    stu.find(callback);
}

