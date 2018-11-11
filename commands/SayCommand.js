const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        message.delete();
        return;
    }

    let arg = message.content.split(" ").slice(1);
    let botmessage = arg.join(" ");
    //let botmessage = args.join(" ");

    message.delete();
    message.channel.send(botmessage);
}

module.exports.help = {
    name: "say"
  }