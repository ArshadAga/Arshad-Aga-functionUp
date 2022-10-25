const mongoose = require('mongoose');

const book2Schema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true,
    },
    authorName: String,
    price: {
        indianPrice: String,
        europePrice: String,
    },
    tags: [String],
    publishedYear:{
        type:Number,
        default:2021
    },
    totalPages:Number,
    stockavailable:Boolean
}, { timestamps: true });
