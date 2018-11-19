const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {
    if(args.length < 2){
        message.channel.send("no game specified");
        return;
    }
    
    var gameName = "";
    for(var i = 1; i < args.length; i++){
        gameName += args[i] + " ";
    }
    client.user.setActivity(gameName)
        .then(user => console.log("--> Game set: " + gameName))
        .catch(console.error);
}
 
module.exports.help = {
  name: "setgame"
}
