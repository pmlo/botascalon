const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {

  let id;
  let response;

    message.delete();

    if(!message.channel.permissionsFor(message.member).hasPermission("BAN_MEMBERS")) return;

    if(args[0] == null || args[1] == null) {

      id = args.shift();
      response = args.join(' ');

      if(!ops.dmMessage.has(`${id}`)) {
        message.channel.send(`L'id : **${id}** n'est indiqué n'exite pas (ou la demande à déjà été traiter).`)
        return;
      }

      message.guild.members.get("" + ops.dmMessage.get(`${id}`)).sendMessage(`${response}`);
    }
  }

  module.exports.help = {
      name: "dm"
    }
