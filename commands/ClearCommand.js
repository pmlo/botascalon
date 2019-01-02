const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {

    message.delete();

    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
        message.delete();
        return;
    }

    if(!args[0]) {
        message.channel.send("Vous n'avez pas précisez combien de message je dois supprimer").then(message => message.delete(2000));
        message.delete();
        return;
    }

    if (message.channel.type == 'text') {
        message.channel.fetchMessages()
          .then(messages => {
            message.channel.bulkDelete(messages);
            messagesDeleted = messages.array().length; // number of messages deleted

            // Logging the number of messages deleted on both the channel and console.
            message.channel.sendMessage("Deletion of messages successful. Total messages deleted: "+messagesDeleted);
            console.log('Deletion of messages successful. Total messages deleted: '+messagesDeleted)
          })
          .catch(err => {
            console.log('Error while doing Bulk Delete');
            console.log(err);
          });

  }
}

module.exports.help = {
    name: "clear"
  }
