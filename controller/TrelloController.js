const trelloBoardService = require('./../service/BoardAPI.js');
const trelloListService = require('./../service/ListAPI.js');

exports.createBoard = (req, res) => {
    trelloBoardService.createBoard(req, res);
}

exports.updateBoard = (req, res) => {
    trelloBoardService.updateBoard(req, res);
}

exports.deleteBoard = (req, res) => {
    trelloBoardService.deleteBoard(req, res);
}

exports.createCheckList = (req, res) => {
    trelloListService.createCheckList(req, res);
}

exports.searchCheckList = (req, res) => {
    trelloListService.searchCheckList(req, res);
}