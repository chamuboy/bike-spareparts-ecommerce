// models/Item.js

const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cost:{
        type:Number,
        required: true
    },
    description:{
        type:String
    },
    category: {
        type: String,
        required: true
    },
    subcategory: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
    
});

const Item = mongoose.model('Sparepart', itemSchema);

module.exports = Item;
