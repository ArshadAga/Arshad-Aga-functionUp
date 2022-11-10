const express = require('express');

const router = express.Router();

const controller =require('../controllers/controller')



router.get('/getWeatherInLondon', controller.getWeatherInLondon)
router.get('/getTemperatureOfLondon', controller.getTemperaturInLondon)
router.get('/getTemperatureInCities', controller.getTemperatureInCities)





module.exports = router