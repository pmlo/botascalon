const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {

    let channelTeam1 = "501124673354858516"; let channelTeam2 = "502944251026472970"; 
    let channelTeam3 = "502945786028490753"; let channelTeam4 = "501124944885710859"; 
    
    bot.channels.get(channelTeam1).setName('Equipe 1 -'); bot.channels.get(channelTeam2).setName('Equipe 2 -'); 
    bot.channels.get(channelTeam3).setName('Equipe 3 -'); bot.channels.get(channelTeam4).setName('Equipe 4 -'); 
    
    ops.soloTournoi.clear();

    let role = message.guild.roles.find(`name`, `test`);

    const guildMember = message.member;
    await (guildMember.removeRole(role.id))
    .then(role => console.log(`CLEAR JOUEURS TOURNOIS: ${message.guild.name}`))
    .catch(console.error);

    
    message.reply(`solo tournoi complete :white_check_mark:`).then(message => message.delete(5000));
}
 
module.exports.help = {
  name: "clearsolo"
}