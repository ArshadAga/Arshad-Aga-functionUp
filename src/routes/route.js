const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const books = require("../models/booksModel")
const UserController= require("../controllers/userController")
const bookcontroller = require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", bookcontroller.newbooks )
router.get("/allBooks", bookcontroller.bookslist)

module.exports = router;