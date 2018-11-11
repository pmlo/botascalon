const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {

    message.delete();

    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if(!message.channel.permissionsFor(message.member).hasPermission("ADMINISTRATOR")) {
        message.delete();
        return;
    }

    let muterole = message.guild.roles.find(`name`, "staff");
    //start of create role
      try{
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: true,
            ADD_REACTIONS: true,
            SPEAK: true,
            KICK_MEMBERS: true,
            MANAGE_CHANNELS: true,
            MANAGE_GUILD: true,
            ADD_REACTIONS: true,
            SEND_MESSAGES: true,
            SEND_TTS_MESSAGES: false,
            MANAGE_MESSAGES: true,
            READ_MESSAGE_HISTORY: true,
            USE_EXTERNAL_EMOJIS: true,
            CONNECT: true,
            SPEAK: true,
            MUTE_MEMBERS: true,
            MOVE_MEMBERS: true,
            CHANGE_NICKNAME: true,
            MANAGE_NICKNAMES: true,
            MANAGE_ROLES: true
            
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    
}

module.exports.help = {
    name: "role"
  }