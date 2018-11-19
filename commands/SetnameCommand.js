const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {
if(args.length < 2){
    message.channel.send("no new name specified");
    return;
}

var username = "";
for(var i = 1; i < args.length; i++){
    username += args[i] + " ";
}
bot.user.setUsername(username)
    .then(user => console.log("--> New username set: " + user.username));
}
 
module.exports.help = {
  name: "ban"
}
