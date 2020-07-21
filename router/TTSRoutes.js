const express = require('express');
const router = express.Router();
const ttsController = require('./../controller/TTSController.js');


//Middleware
router.use(function timeLog (req, res, next) {
    console.log('The route was triggered at : ', Date.now())
    next()
})

router.get('/', (req, res) => {
    ttsController.speak(req, res);
})

module.exports = router;