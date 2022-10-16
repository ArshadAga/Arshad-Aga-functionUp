const express = require('express');
const router = express.Router();///test-you
//importing a custom module
/*const xyz = require('../logger')*/
const abc =require('../logger/logger')
const util = require('../util/helper')
const validator = require('../validator/formatter')
// const months1 = require('../lodash/lodash')
//importing external package
const underscore = require('underscore')
const _ =require('lodash');
const { fromPairs } = require('lodash');

let month=["January","February","March","April","May","June","July","August","September","October","November","December"];


let Oddnum = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ]

let FiveNum = [1, 2, 3, 4, 5, 1]

let pair = [
    ['Horror','The Shining'],
    ['Drama', 'Titanic'],
    ['Thriller', 'Shutter Island'],
    ['Fantasy','Pans Labyrinth']
]



router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
   /* console.log("Calling my function ",xyz.myFunction())
    console.log("The value of the constant is ",xyz.myUrl)*/
    console.log("this is the assignment question no 1st solution:",abc.welc())
    console.log('||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||')
    console.log('The 2nd questions solution is below')
    console.log("yy-mm-dd ", util.helper1)
    console.log("The month is ", util.helper2,'(October)')
    console.log("and the date is ", util.helper3,'/10/2022')
    console.log("This is batch Information", util.helper4,)
    console.log('||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||')
    console.log('The solution of 3rd question starts below')
    console.log("This assigment consist of ",validator.formatting1)
    console.log( ' trimming',validator.formatting2 )
    console.log('lower case',validator.formatting3)
    console.log('upper case', validator.formatting4)
    console.log('||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||')
    console.log('The solution of 4th question is starting from here ')
    console.log("This is the Chunk function of Lodash",_.chunk(month,4))
    console.log("This is the Tail function of Lodash",_.tail(Oddnum,9))
    console.log("This is the union function of Lodash", _.union(FiveNum))
    console.log("This is the fromPair function of Lodash", _.fromPairs(pair))


    

    //Trying to use an external package called underscore
   /* let myArray = ['Akash', 'Pritesh', 'Sabiha']
    let result = underscore.first(myArray)
    console.log("The result of underscores examples api is : ", result)*/
    res.send('This is the first Assignment in the Api')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

