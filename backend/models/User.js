const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    contactNo:{
        type:Number,
        required:true
    },
    dateofbirth:{
        type:Date,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

const User = mongoose.model('MyUser', userSchema);

module.exports = User;
