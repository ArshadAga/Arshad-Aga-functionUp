const { count } = require("console")
const AuthorModel= require("../models/authormodel")
const BookModel= require("../models/bookModel")
//----create author and book----
const createAuthor= async function (req, res) {
    let data= req.body
    let authorId = data.author_id
    if(! authorId) {return  res.send({status: false , msg : "author id must be presenrt" })}
    let savedAuthor= await AuthorModel.create(data)
   
   res.send({msg: savedAuthor})
   
}
const createBooks= async function (req, res) {
    let data= req.body  
     let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
//------------Chetan Bhagat------books-
const getBookByAuthor= async function (req, res) {
   const author= await AuthorModel.findOne({author_name:"Chetan Bhagat"})
//    const id = author.author_id;
   const book= await BookModel.find({author_id : author.author_id })
     res.send({msg: book, condition: true})
}
//----------Two states---and update price return author and update data
const getUpdate= async function (req, res) {
    const book= await BookModel.findOne({bookName:"Two states"})
    const id = book.author_id;
    const upBook= await BookModel.findOneAndUpdate( 
              { bookName: "Two states"} , 
              { $set:{ price:100} }, 
               { new: true , upsert: true} )
    const author= await AuthorModel.find({author_id : id }).select({author_name:1, _id :0})
      res.send({msg: upBook, name: author })
 }
 //--------costs between 50-100 -------
 const priceRange= async function (req, res) {
    const book = await BookModel.find({price:{$gte:50, $lte :100}}).select({ bookName:1,author_id:1, _id:0})
    const authorlist = book.map(book=>book.author_id)
    const author= await AuthorModel.find({author_id :{$in:authorlist}}).select({author_name:1,author_id:1, _id:0})
    
    res.send({msg: book, author})
}
module.exports.priceRange= priceRange
module.exports.createAuthor= createAuthor
module.exports.getBookByAuthor= getBookByAuthor
module.exports.getUpdate= getUpdate
module.exports.createBooks=createBooks
