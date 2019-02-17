module.exports.run = async (bot, message, args, ops, tools) => {

  message.delete();
  //CHECK IF MENTION USER EXIST
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute){tools.log("CHECK COMMAND MUTE NOT PLAYER FOUND", message); return;}

  if(tomute.hasPermission("MANAGE_MESSAGES")) {tools.log('CHECK COMMAND MUTE NOT PLAYER HAS PERMISSION', message); return;}
  let muterole = message.guild.roles.find(`name`, 'muted');

  if(message.member.roles.has(muterole.id)) {
    //REMOVE ROLE TO USER
    tomute.removeRole(muterole.id);
    //LOG
    tools.log('CHECK COMMAND MUTE REMOVE ROLE', message);
    //SEND MESSAGE FOR VALID UNMUTE
    //message.channel.send(`<@${tomute.id}> est unmute !`).then(message => message.delete(5000));
    //LOG
    tools.log('CHECK COMMAND MUTE SEND MESSAGE TO PLAYER', message);

    const joinChannel = message.member.guild.channels.find('name', 'history-bot');
  joinChannel.send({embed: {
    color: 3447003,
    author: {
      name: "ASCALON BOT",
      icon_url: "https://i.imgur.com/r1T3PbX.png"
    },
    title: `Le joueur ${tomute.user.username} à été unmute`,
    timestamp: new Date(),
    footer: {
      icon_url: "https://i.imgur.com/318H4Xw.png",
      text: "© Created by Zayn#0607"
    }
  }
});
}
}

module.exports.help = {
  name: "unmute"
}
