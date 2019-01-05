const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args, ops) => {
  

    message.delete();

    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
        message.delete();
        return;
    }

    // let args
    let arg = message.content.split(" ").slice(1);
    let thingToEco = arg.join(" ");
    let myRole = message.guild.roles.find(role => role.name === "NotifSondages");

    bot.channels.get("495904344080777246").sendMessage("Mention :" + myRole);

   //message.guild.channels.find("name", "sanction").sendMessage(myRole);
    var embed = new Discord.RichEmbed()
    .setDescription(`Sondage`)
    .addField(thingToEco, "Répondez au sondage avec ✅ ou ❌")
    .setColor("0xB40404")
    .setTimestamp()
    .setFooter("Sondage ASCALON");
    message.guild.channels.find("name", "🌐sondage").sendEmbed(embed)
    .then(function (message) {
        message.react("❌")
        message.react("✅")

        const logChannel = message.member.guild.channels.find('name', 'history-bot');
    logChannel.send(`[LOG] SEND SONDAGE MESSAGE BY ${message.author}`);

    }).catch(function() { });

   // Notif Sondages
}

module.exports.help = {
  name: "sondage"
}
