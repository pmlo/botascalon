const Discord = require("discord.js");
module.exports.run = async (bot, message, args, ops, tools) => {

  message.delete();

  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
      message.delete();
      return;
  }

  tools.clearbuildfightsolo(bot, ops, message);
}

module.exports.help = {
  name: "resetsolobf"
}
