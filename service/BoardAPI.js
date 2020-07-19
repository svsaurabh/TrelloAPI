const trelloNode = require('trello-node-api')('60b27d31e9f987aa774cfef8a80d0bc5', '824cec21a48489fd2c31a20383ddcc687537e5bf2eed57785be4f207426da398');
const say = require('say')

exports.createBoard = (req, res) => {
        let voiceData = "";
        let data = {
            name: req.body.boardName,
            defaultLabels: false,
            defaultLists: false,
            desc: 'Board description.'
        };
        trelloNode.board.create(data).then(function (response) {
            voiceData = "Your board with name" + response.name + "has been created successfully";
            say.speak(voiceData, 1.0, (err) => {
                if (err) {
                return console.error(err)
                }
            });
            console.log('response ', response);
            res.send(response);
        }).catch(function (error) {
            console.log('error', error);
    });
}

exports.updateBoard = (req, res) => {
    var id = '5f11593ce073d4713a10b3da';
     var data = {
         name: req.body.boardName,
         desc: req.body.desc
     };    
     trelloNode.board.update(id, data).then(function (response) {
        voiceData = "Your board with name" + response.name + "has been updated successfully";
        say.speak(voiceData, 1.0, (err) => {
            if (err) {
            return console.error(err)
            }
        });
         console.log('response ', response);
     }).catch(function (error) {
         console.log('error', error);
     });
}

exports.deleteBoard = (req,res) => {
    trelloNode.board.del(req.body.boardName).then(function (response) {
        voiceData = "Your board has been deleted successfully";
        say.speak(voiceData, 1.0, (err) => {
            if (err) {
            return console.error(err)
            }
        });
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });
}

