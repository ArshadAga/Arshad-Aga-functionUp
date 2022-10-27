const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)




router.post("/createBook", BookController.CreateBook ) //1

router.get("/getbookslist", BookController.getbookslist) //2

router.post("/getBooksInYear", BookController.getBooksInYear) //3

router.post("/getParticularBooks", BookController.getParticularBooks)  //4

router.get("/getXINRBooks", BookController.getXINRBooks)  //5

router.get("/getRandomBooks", BookController.getRandomBooks)  //6







module.exports = router;