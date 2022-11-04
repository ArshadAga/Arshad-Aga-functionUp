const express = require('express');
const router = express.Router();
// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
    //     res.send("My first ever api!")
    // })
    
    // //Can we set the 'next' input parameter in a route handler?
    // //What is the primary difference between a middleware and a route handler?
    // router.post("/createBook", commonMW.myMiddleware,BookController.createBook, function(req, res, next){
        //     res.send("Ending the cycle")
        // }  )
        
        // router.post("/createUser", commonMW.myMiddleware, UserController.createUser)
        
        // router.get("/dummy1", commonMW.myOtherMiddleware, UserController.dummyOne)
        
        // router.get("/dummy2", commonMW.myOtherMiddleware, UserController.dummyTwo)
        
        // router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)
        
        // module.exports = router;
        
        const UserController=require('../controllers/userDocument')
        const ProductController=require('../controllers/productDocument')
        const OrderController=require('../controllers/oderDocument')
        const commonMW = require ("../middlewares/middleware")
        



router.post("/CreatUserDocument",commonMW.checkIsFreeAppUserOrNot, UserController.createUser)
router.post("/CreatProductDocument", ProductController.createProduct)
router.post("/CreatOderDocument",commonMW.checkIsFreeAppUserOrNot,commonMW.chengeAmountOfOrder, OrderController.createOrder)
router.get("/getOrderData",OrderController.getOrder)




module.exports = router;