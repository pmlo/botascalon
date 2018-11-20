const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d

  message.delete();



  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return;
  
  if(tomute.hasPermission("MANAGE_MESSAGES")) return;

  if(message.member.roles.has("muted")) {
  
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> est unmute !`).then(message => message.delete(5000));
  } else {
    message.channel.send(`<@${tomute.id}> n'est pas mute !`).then(message => message.delete(2000));
      return;
  }
}

module.exports.help = {
  name: "untpmute"
}