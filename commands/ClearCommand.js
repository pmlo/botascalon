const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {

    message.delete();
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
        message.delete();
        return;
    }
    
    if(!args[0]) {
        message.channel.send("Vous n'avez pas précisez combien de message je dois supprimer").then(message => message.delete(5000));
        message.delete();
        return;
    }

    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Cleared ${args[0]} messages.`).then(message => message.delete(5000));
    });

}

module.exports.help = {
    name: "clear"
  }