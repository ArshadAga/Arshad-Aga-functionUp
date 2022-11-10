const express = require('express')
const controller = require('../controllers/controller')

const router = express.Router()



router.get('/getStates', controller.getStates)
router.get('/getDistrict/:stateId', controller.getDistrict)
router.get('/getSessionByDistrict',controller.getsession)








module.exports = router
