var trelloNode = require('trello-node-api')('60b27d31e9f987aa774cfef8a80d0bc5', '824cec21a48489fd2c31a20383ddcc687537e5bf2eed57785be4f207426da398');
const say = require('say')

exports.createCheckList = (req,res) => {
    let voiceData = "";
    let data = {
        name: req.body.checklistName,
        idBoard: '5f119777a299d707410a9b94',
        pos: 'top'
    };
    trelloNode.list.create(data).then(function (response) {
        // voiceData = "A new checklist has been created successfully";
        //     say.speak(voiceData, 1.0, (err) => {
        //         if (err) {
        //         return console.error(err)
        //         }
        //     });
            console.log('response ', response);
            res.send(response);
        }).catch(function (error) {
            console.log('error', error);
        });
}

exports.searchCheckList = (req, res) => {
    trelloNode.list.search(req.query.id).then(function (response) {
        // voiceData = "The checklist has been searched successfully";
        // say.speak(voiceData, 1.0, (err) => {
        //     if (err) {
        //     return console.error(err)
        //     }
        // });
        console.log('response ', response);
        res.send(response);
    }).catch(function (error) {
        console.log('error', error);
    });
}
