
// const mid1= function ( req, res, next) {
//     req.falana= "hi there. i am adding something new to the req object"
//     console.log("Hi I am a middleware named Mid1")
//     next()
// }

// const mid2= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid2")
//     next()
// }

// const mid3= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid3")
//     next()
// }

// const mid4= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     next()
// }

// module.exports.mid1= mid1
// module.exports.mid2= mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4



const express = require('express')
const moment = require('moment')
const app = express()

app.use(middleware) //global middleware


function middleware (req,res, next){
    let todayDate = moment().format
    let ip = req.ip
    let route = req.originalUrl
    console.log(todayDate, ip,route)
}

function aftermiddleware (req, res){
    res.send("Your middleware is successfully running on the console")
}

module.exports = aftermiddleware
