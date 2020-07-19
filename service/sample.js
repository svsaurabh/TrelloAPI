var meSpeak = require("mespeak")
 
//Play a sound
process.stdout.write(meSpeak.speak("hello world", {rawdata: "buffer"}))