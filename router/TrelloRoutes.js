const express = require('express');
const router = express.Router();
const trelloController = require('./../controller/TrelloController.js');


//Middleware
router.use(function timeLog (req, res, next) {
    console.log('The route was triggered at : ', Date.now())
    next()
})

router.post('/createBoard', (req, res) => {
    trelloController.createBoard(req, res);
})

router.post('/updateBoard', (req, res) => {
    trelloController.updateBoard(req, res);
})

router.delete('/deleteBoard', (req, res) => {
    trelloController.deleteBoard(req, res);
})

router.post('/createCheckList', (req, res) => {
    trelloController.createCheckList(req, res);
})

router.get('/searchCheckList', (req, res) => {
    trelloController.searchCheckList(req, res);
})

router.post('/createCard', (req, res) => {
    trelloController.createCard(req, res);
})


module.exports = router;