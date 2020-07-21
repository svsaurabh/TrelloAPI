const trelloNode = require('trello-node-api')('60b27d31e9f987aa774cfef8a80d0bc5', '824cec21a48489fd2c31a20383ddcc687537e5bf2eed57785be4f207426da398');

exports.createCard = (req, res) => {
    var data = {
        name: req.body.name,
        desc: req.body.description,
        pos: 'top',
        idList: req.body.listId,
    };
    trelloNode.card.create(data).then(function (response) {
        // voiceData = "Your board with name" + response.name + "has been created successfully";
        // say.speak(voiceData, 1.0, (err) => {
        //     if (err) {
        //         return console.error(err)
        //     }
        // });
        console.log('response ', response);
        res.send(response);
    }).catch(function (error) {
        console.log('error', error);
    });
}

exports.searchCard = (req, res) => {
    trelloNode.card.search(req.query.cardId).then(function (response) {
        console.log('response ', response);
        res.send(response);
    }).catch(function (error) {
        console.log('error', error);
    });
}