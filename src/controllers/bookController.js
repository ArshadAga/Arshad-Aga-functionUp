const bookModel= require("../models/booksModel")


const newbooks = async function(req, res){
    let data =req.body
    let savedData = await bookModel.books.create(data)
    res.send({msg:savedData})
}
const bookslist = async function(req, res){
    let allBooks = await bookModel.books.find()
    res.send({msg: allBooks})
}

module.exports.newbooks = newbooks
module.exports.bookslist = bookslist