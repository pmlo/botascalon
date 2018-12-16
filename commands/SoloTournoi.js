const Discord = require("discord.js");
module.exports.run = async (bot, message, args, ops, tools) => {

  message.delete();

  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
      message.delete();
      return;
  }

  if(args[0] == null) {
    message.channel.send("Vous n'avez pas précisez le nombre d'inscription max.").then(message => message.delete(5000));
      return;
  }

  let inscriptionsolo = "511210802712412170";
  bot.channels.get(inscriptionsolo).setName("🌀inscription-solo-on");

  var sizeMax = args[0];
  tools.initsolo(sizeMax);
}

module.exports.help = {
  name: "initsolo"
}
