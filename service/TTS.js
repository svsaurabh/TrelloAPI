const say = require('say')

let data = "Your board id is 75387"

exports.speak = (req, res) => {
  say.speak(data, 1.0, (err) => {
    if (err) {
      return console.error(err)
    }
  });
  res.send(data);
}
