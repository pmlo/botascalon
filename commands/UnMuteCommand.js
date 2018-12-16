module.exports.run = async (bot, message, args, ops, tools) => {

  message.delete();
  //CHECK IF MENTION USER EXIST
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute){tools.log("CHECK COMMAND MUTE NOT PLAYER FOUND"); return;}

  if(tomute.hasPermission("MANAGE_MESSAGES")) {tools.log('CHECK COMMAND MUTE NOT PLAYER HAS PERMISSION'); return;}
  let muterole = message.guild.roles.find(`name`, 'muted');

  if(message.member.roles.has(muterole.id)) {
    //REMOVE ROLE TO USER
    tomute.removeRole(muterole.id);
    //LOG
    tools.log('CHECK COMMAND MUTE REMOVE ROLE');
    //SEND MESSAGE FOR VALID UNMUTE
    message.channel.send(`<@${tomute.id}> est unmute !`).then(message => message.delete(5000));
    //LOG
    tools.log('CHECK COMMAND MUTE SEND MESSAGE TO PLAYER');
} else {
  return;
}
}

module.exports.help = {
  name: "mute"
}
