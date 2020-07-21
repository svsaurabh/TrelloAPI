const ttsService = require('./../service/TTS.js')

exports.speak = (req, res) => {
    ttsService.speak(req, res);
}