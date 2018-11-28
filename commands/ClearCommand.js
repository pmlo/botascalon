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

    if(args[0] == "full") {

        try {
            
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);
    message.channel.bulkDelete(100);

        }catch(e){
            console.log(e.stack);
        }
    }

    message.channel.bulkDelete(args[0]);
    
    /*let messagecount = parseInt(args[0]) || 1;

        var deletedMessages = -1;

        message.channel.fetchMessages({limit: Math.min(messagecount + 1, 100)}).then(messages => {
            messages.forEach(m => {
                    m.delete().catch(console.error);
                    deletedMessages++;
            });
        }).then(() => {
                if (deletedMessages === -1) deletedMessages = 0;
                message.channel.send(`:white_check_mark: Purged \`${deletedMessages}\` messages.`)
                    .then(m => m.delete(2000));
            const logChannel = message.member.guild.channels.find('name', 'history-bot');
        logChannel.send(`[LOG] channel ${message.member.channel.name} cleared ${message.author}`);
        }).catch(console.error);
    */
    
    
   /** if(!message.member.hasPermission("MANAGE_MESSAGES")) {
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
    });**/

}

module.exports.help = {
    name: "clear"
  }

