const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    bookName: String,
    authorName: String,
    category: String,
    year: Number,
    deletedAt: {
        type: Date,
        default: Date.now,
      },
      isDeleted: {
        type: Boolean,
        default: false,
      },
  
},{timestamps: true});

module.exports.books= mongoose.model('Book',BookSchema) //books