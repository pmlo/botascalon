const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {

    if(args[0] == null || args[1] == null) {
        message.delete();
        return;
    }


    if(!message.channel.permissionsFor(message.member).hasPermission("BAN_MEMBERS")) {
        message.delete();
        return;
    }

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) {
        message.author.send("Bonjour, vous avez essayer d'éxecuter la commande a!ban mais la personne ciblée n'existe pas");
        message.delete();
        return;
    }

    var member = message.mentions.members.first();

    if(!member) {
        message.author.send("Bonjour, l'utilisateur ne peut être unban");
        message.delete();
        return;
    }

    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Ban")
    .setColor("#15f153")
    .addField("Ban User", `${rUser}`)
    .addField("Ban par", `${message.author}`)
    .addField("Raison du ban", rreason);

    message.guild.member(member).ban(rreason);

    let banchannel = message.guild.channels.find(`name`, "history-bot");
    if(!banchannel) return;


    message.delete();
    banchannel.send(reportEmbed);

}
 
module.exports.help = {
  name: "ban"
}