const mongoose = require('mongoose');

const OrdersSchema = new mongoose.Schema({

    name: String,
    price: Number,
    percent: String,
    isDown: Boolean,

});

module.exports = {OrdersSchema};