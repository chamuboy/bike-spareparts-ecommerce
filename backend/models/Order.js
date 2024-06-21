// models/Order.js

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        items: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Item',
                required: true
            }
        ],
        totalCost: {
            type: Number,
            required: true
        },
        shippingDetails: {
            type: Object,
            required: true
        },
        status: {
            type: String,
            enum: ['pending', 'completed', 'received'],
            default: 'pending'
        }
    },
    { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;