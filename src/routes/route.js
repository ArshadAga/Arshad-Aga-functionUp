const express = require('express');

const router = express.Router();

const controller =require('../controllers/controller')


router.get('/memesList', controller.getMemes)
router.post('/editMemes', controller.editMemes)



module.exports = router