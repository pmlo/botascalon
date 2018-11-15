const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {

    
    message.delete();
    
    
    const user = (msg.mentions.users.first() || bot.users.get(args[0]) || null);
  const amount = !!user ? parseInt(msg.content.split(" ")[2], 10) : parseInt(msg.content.split(" ")[1], 10);
  if (!amount) return msg.edit("Must specify an amount to delete!").then(msg.delete(2000));
  if (!amount && !user) return msg.edit("Must specify a user and amount, or just an amount, of messages to purge!").then(msg.delete(2000));
  await msg.delete();
  let messages = await msg.channel.messages.fetch({limit: 100});
  if(user) {
    messages = messages.array().filter(m=>m.author.id === user.id);
    bot.log("log", "Purge Amount", msg.author, "Amount: " + amount);
    messages.length = amount;
  } else {
    messages = messages.array();
    messages.length = amount + 1;
  }
  messages.map(async m => await m.delete().catch(console.error));
});
    
    
   /* let messagecount = parseInt(args[0]) || 1;

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
        }).catch(console.error);*/
    
    
    
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

