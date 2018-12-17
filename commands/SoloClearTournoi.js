const Discord = require("discord.js");


module.exports.run = async (bot, message, args, ops, tools) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.delete();
    return;
}

  tools.resetsolo(bot, ops, message);
}

module.exports.help = {
  name: "clearsolo"
}
