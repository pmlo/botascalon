const Fortnite = require('fortnite');
const stats = new Fortnite(process.env.TRN);
const Discord = require('discord.js');
module.exports.run = async (bot, message, args, ops) => {

    let platform;
    let username;

    if(!['pc', 'xbox','ps4']) message.channel.send('Veuillez préciser la platforme du joueur : a!fnitestats platform username');

    if(!args[1]) message.channel.send('Veuillez préciser le pseudo du joueur : a!fnitestats <pc;xbox;ps4< <username>');

    platform = args.shift();
    username = args.join(' ');

    stats.getInfo(username,platform).then( date => {

        const embed = new Discord.MessageEmbed()
        .setColor('0xffffff')
        .setTitle(`Stats pour ${data.username}`)
        .setDescription("Lifetime Stats")
        .setThumbnail(bot.user.displayAvatarURL)
        .addField("Wins", data.stats.lifetime[8]["Wins"], true)
        .addField("Top 3s", data.stats.lifetime[1]["Top 3s"], true)
        .addField("Top 5s", data.stats.lifetime[0]["Top 5s"], true)
        .addField("Win/Lose", data.stats.lifetime[9]["Win%"], true)
        .addField("Kills", data.stats.lifetime[10]["Kills"], true)
        .addField("K/D", data.stats.lifetime[11]["K/d"], true)
        .addField("Kill(s) par minute", data.stats.lifetime[11]["Kill(s) par minute"], true)
        .addField("Temps jouer", data.stats.lifetime[13]["Temps jouer"], true)
        .addField("Temps de survie", data.stats.lifetime[14]["Temps de survie"], true)
    })
    .catch(error => {
        message.channel.send("Le pseudo n'a pas été trouver");
    })
}

module.exports.help = {
    name: "fnitestats",
  }