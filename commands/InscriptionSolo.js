const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {

    message.delete();

    if(bot.isSoloFull == true) {
      message.channel.send(`<@${message.author.id}> Je suis désolée mais les places pour les inscriptions tournois sont complètes...`);
      return;
    }


    let arg = message.content.split(" ").slice(1);
    let messages = arg.join(" ");
    if(bot.SoloTournoi.has(`test`)) {
      message.channel.send(`<@${message.author.id}> Vous êtes déjà inscrit`);
      return;
    }
    bot.numberisinscriptionsolo+=1;
    const joinChannel = message.member.guild.channels.find('name', '🚻equipe-inscrite');
    joinChannel.send(`Le joueur ${messages} (<@${message.author.id}>) vient de s'inscrire pour le tournoi **ASCALON SOLO**`);
    bot.SoloTournoi.set(`${messages}`, `${messages}`);
}
 
module.exports.help = {
  name: "testsolotournoi"
}
