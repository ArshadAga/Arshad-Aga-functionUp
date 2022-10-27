const mongoose = require('mongoose');



const AuthorsSchema = new mongoose.Schema(
    {
        author_id:Number,
        author_name:String,
        age:Number,
        address:String

    }
)
module.exports.Authorsection = mongoose.model('Author', AuthorsSchema)

const BookandAuthorsId = new mongoose.Schema(
    {
        name:String,
        author_id:Number,
        price:Number,
        ratings:Number
        
    }
    )
module.exports.BooksSection = mongoose.model('BookWithAuthorID', BookandAuthorsId)
    
// const bookSchema = new mongoose.Schema( {
//     bookName: String, 
//     authorName: String, 
//     tags: [String],
    
//     isPublished: Boolean,
//     prices: {
//         indianPrice: String,
//         europePrice: String,
//     },
//     sales: {type: Number, default: 10},
    
    // " best boook on earth"   [ "Nodejs in detail" , "mongodb in detail", "fronend in detail"] 
    // {
        // "ch1 ": "awesome intro to JS",
        // "ch2" : "intro to nodejs",
        // "ch3" : "intro to db"
    //  }
//     summary :  mongoose.Schema.Types.Mixed,
//     isDeleted: Boolean //true on book deletion i.e you flag the document/data as isDeleted: true..(mark "dirty")

// }, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users
