const express = require('express')
const app = express()
const ttsRouter = require('./router/TTSRoutes.js') 
const trelloRouter = require('./router/TrelloRoutes.js')

app.use(express.urlencoded({ extended: true}));
app.use(express.json())
//Use the defined routes
app.use('/api/tts', ttsRouter);
app.use('/api/trello', trelloRouter);

app.listen(process.env.PORT || 8000)
console.log(`The app is listening to 8000`);