const Discord = require("discord.js");
module.exports.run = async (bot, message, args, ops, tools) => {

  message.delete();

  if(message.channel.name == "🌀inscription-solo-off")
  return message.channel.send(`<@${message.author.id}> L'inscription pour le tournoi **ASCALON SOLO** est fermer. `).then(message => message.delete(5000));

  let arg = message.content.split(" ").slice(1);
  let messages = arg.join(" ");

  if(ops.soloTournoi.has(`${messages}`) || ops.soloTournoi.has(`<@${message.author.name}>`))
  return message.channel.send(`<@${message.author.name}> Vous êtes déjà inscrit`);

  if(ops.soloTournoi.size >= ops.numbersolomax) {
    var embed = new Discord.RichEmbed()
    .setTitle(`TOURNOI SOLO ASCALON`)
    .addField(`📛 Vous n'êtes pas inscrit au tournoi ASCALON SOLO ${messages} ! Celui ci est au complet 📛`, "🕛 Vous venez quand même au tournoi, des places se libéreront surêment ! 🕛")
    .setColor("0xB40404")
    .setTimestamp()
    .setFooter("TOURNOI SOLO ASCALON");
    message.guild.channels.find("id", "511210802712412170").sendEmbed(embed);
    return;
  }

}


module.exports.help = {
  name: "solo"
}
