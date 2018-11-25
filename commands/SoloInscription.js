const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {

    message.delete();

    if(ops.isONSOLO == false) {
      return message.channel.send(`<@${message.author.id}> L'inscription pour le tournoi **ASCALON SOLO** est fermer. `).then(message => message.delete(5000));
    }

    let arg = message.content.split(" ").slice(1);
    let messages = arg.join(" ");
    if(ops.soloTournoi.has(`${messages}`)) {
      message.channel.send(`<@${message.author.id}> Vous êtes déjà inscrit`);
      return;
    }
    if(bot.numberisinscriptionsolo >= bot.numermaxinscriptionsolo) {
        message.channel.send(`<@${message.author.id}> Le tournoi est plein.`);
        return;
    }
    
    bot.numberisinscriptionsolo+=1;
    const joinChannel = message.member.guild.channels.find('name', '🚻equipe-inscrite');
    joinChannel.send(`Le joueur ${messages} (<@${message.author.id}>) vient de s'inscrire pour le tournoi **ASCALON SOLO**`);
    ops.soloTournoi.set(`${messages}`, `${messages}`);

    let role = message.guild.roles.find(`name`, `test`);

    const guildMember = message.member;
    guildMember.addRole(role.id);

    
}
 
module.exports.help = {
  name: "inscriptionsolo"
}
