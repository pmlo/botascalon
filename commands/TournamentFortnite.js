const ytdl = require('ytdl-core');
const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        message.delete();
        return;
    }

    if(!message.member.voiceChannel) return;
    
    if(args[0] == null){
        return;
    }

   //if(message.guild.me.voiceChannel) return message.channel.send('Désolée mais le bot est déjà dans votre channel.');

    var file = args[0];

   var VC = message.member.voiceChannel;
   if (!VC)
       return;
    VC.join()
   .then(connection => {
       const dispatcher = connection.playFile('./voice/' + file);
       dispatcher.on("end", end => {VC.leave()});
   })
   .catch(console.error);
};



module.exports.help = {
    name: "proute"
  }
