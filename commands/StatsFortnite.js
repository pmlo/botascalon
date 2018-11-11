const Discord = require("discord.js");
const Client = require("fortnite");
const fortnite = new Client('7f2c2d81-71e1-4fdd-a18a-9ea6ccdde148')
module.exports.run = async (bot, message, args, ops) => {
  //this is where the actual code for the command goes
  await message.delete();

  const filter = m => m.author.id === message.author.id;
  message.reply("Entrer le nom d'un joueur .... il vous reste 10 secondes avec l'annulation de cette requête.").then(q => q.delete(15000))
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(collected => {
    collected.delete(15000);
    if (collected.first().content === 'cancel') {
      return message.reply("Annulé.");
    }

    let username = collected.first().content;

    const filter = m => m.author.id === message.author.id;
  message.reply("Entrer le nom de votre plateforme .... il vous reste 10 secondes avec l'annulation de cette requête.").then(q => q.delete(15000))
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(collected1 => {
    collected1.delete(15000);
    if (collected1.first().content === 'cancel') {
      return message.reply("Annulé.");
    }

    let plateforme = collected1.first().content;

    fortnite.user(username, plateforme).then(data => {
      message.delete();
    //console.log(data.stats.lifetime)
    let embed = new Discord.RichEmbed()
      .setTitle(username)
      .setColor("BLURPLE")
      .setDescription("Lifetime Stats")
      .setThumbnail(bot.user.displayAvatarURL)
      .addField("Top 3s", data.stats.lifetime[1]["Top 3s"], true)
      .addField("Top 5s", data.stats.lifetime[0]["Top 5s"], true)
      .addField("Wins", data.stats.lifetime[8]["Wins"], true)
      .addField("Win/Lose", data.stats.lifetime[9]["Win%"], true)
      .addField("Kills", data.stats.lifetime[10]["Kills"], true)
      .addField("K/D", data.stats.lifetime[11]["K/d"], true)
    return message.channel.send(embed);
    }).catch(err => {
      message.delete();
    message.reply("Nous n'avons pas trouver votre utilisateur... vérifiez l'orthographe").then(r => r.delete(5000));
    
    });
  
  }).catch(err => {
    message.reply("Réfusé...").then(r => r.delete(5000));
    console.log("Temps écoulé. Message en attente annulé.");
  });

  
  }).catch(err => {
    message.reply("Réfusé...").then(r => r.delete(5000));
    console.log("Temps écoulé. Message en attente annulé.");
  });
}
//name this whatever the command name is.
module.exports.help = {
  name: "ftn",
}

/**
 * fortnite.user(username, 'pc').then(data => {
  message.delete();
//console.log(data.stats.lifetime)
let embed = new Discord.RichEmbed()
  .setTitle(username)
  .setColor("BLURPLE")
  .setDescription("Lifetime Stats")
  .setThumbnail(bot.user.displayAvatarURL)
  .addField("Top 3s", data.stats.lifetime[1]["Top 3s"], true)
  .addField("Top 5s", data.stats.lifetime[0]["Top 5s"], true)
  .addField("Wins", data.stats.lifetime[8]["Wins"], true)
  .addField("Win/Lose", data.stats.lifetime[9]["Win%"], true)
  .addField("Kills", data.stats.lifetime[10]["Kills"], true)
  .addField("K/D", data.stats.lifetime[11]["K/d"], true)
return message.channel.send(embed);
}).catch(err => {
  message.delete();
message.reply("Nous n'avons pas trouver votre utilisateur... vérifiez l'orthographe").then(r => r.delete(5000));

});
 */
