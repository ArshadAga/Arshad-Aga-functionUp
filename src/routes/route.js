const express = require('express');
// const abc = require('../introduction/intro')
const router = express.Router();

// router.get('/test-me', function (req, res) {
//     console.log('My batch is', abc.name)
//     abc.printName()
//     res.send('My second ever api!')
// });

// router.get('/students', function (req, res){
//     console.log("The path params in the request are : ", req.params)
//     let students = ['Sabiha', 'Neha', 'Akash']
//     res.send(students)
// })

router.get('/movies', function (req, res){
    // req.params
    const movies = ["Laal Singh Chadda", "Rakshabandhan", "Bhramhastra", "Kartikeya-2", "RRR"] //1st question solution
    
    res.send(movies)

})
router.get('/movies/:indexNumber', function (req, res){
    let InParams =req.params
    const movies = ["Laal Singh Chadda", "Rakshabandhan", "Bhramhastra", "Kartikeya-2", "RRR"]   //2nd question solution
    
    if(InParams.indexNumber>(movies.length-1)){
        res.send('Error:Use Valid Index')
    }
    res.send(movies[InParams.indexNumber])

})


// router.get('/films', function (req,res){
    
//     const film=[ {
//         id: 1,
//         name: "The Shining"
//        },
//         {
//         id: 2,
//         name: "Incendies"
//        }, {
//         id: 3,
//         name: "Rang de Basanti"
//        }, {
//         id: 4,
//         name: "Finding Nemo"
//        }]
       
//     res.send(film)
// })


router.get('/films', function(req,res){
    let InParams = req.params
    const film = [
        {id: 1,
         Name: "Laal Singh Chadda"},
        {id: 2,
        Name: "RakshaBandhan"},
        {id: 3,
        Name: "Bramhastra"},
        {id: 4,
        Name: "Kartikeya-2"},
        {id: 5,
        Name: "RRR"}
    ]
    res.send(film)
})

router.get('/films:filmId', function(req,res){
    let InParams = req.params
    const film = [
        {id: 1,
         Name: "Laal Singh Chadda"},
        {id: 2,
        Name: "RakshaBandhan"},
        {id: 3,
        Name: "Bramhastra"},
        {id: 4,
        Name: "Kartikeya-2"},
        {id: 5,
        Name: "RRR"}
    ]
    if(InParams.filmId>(film.length-1)){
        res.send("No Movie Exist with this Id")
    }
    res.send(film[InParams.filmId])
    
})





// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})

module.exports = router;