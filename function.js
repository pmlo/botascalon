const Discord = require("discord.js");

module.exports = {

  log: function(message, channel) {
    const joinChannel = channel.member.guild.channels.find('name', 'history-bot');
    joinChannel.send(`[LOG] ${message}`);
  },

  initsolo: function(size, bot, ops, message) {

    let inscriptionsolo = "511210802712412170";
    bot.channels.get(inscriptionsolo).setName("🌀inscription-solo-on");

    ops.numbersolomax = size;

    let channelTeam1 = "501124673354858516";
    let channelTeam2 = "502944251026472970";
    let channelTeam3 = "502945786028490753";
    let channelTeam4 = "501124944885710859";
    let channelTeam5 = "502945846493446156";
    let channelTeam6 = "502945957705547791";

    if(size == 16) {
      bot.channels.get(channelTeam1).setName('Poule 1');
      bot.channels.get(channelTeam2).setName('Poule 2');
      bot.channels.get(channelTeam3).setName('Poule 3');
      bot.channels.get(channelTeam4).setName('Poule 4');
    }

    if(size == "20") {
        bot.channels.get(channelTeam1).setName('Poule 1');
        bot.channels.get(channelTeam2).setName('Poule 2');
        bot.channels.get(channelTeam3).setName('Poule 3');
        bot.channels.get(channelTeam4).setName('Poule 4');
        bot.channels.get(channelTeam5).setName('Poule 5');

    }

    if(size == "24") {
        bot.channels.get(channelTeam1).setName('Poule 1');
        bot.channels.get(channelTeam2).setName('Poule 2');
        bot.channels.get(channelTeam3).setName('Poule 3');
        bot.channels.get(channelTeam4).setName('Poule 4');
        bot.channels.get(channelTeam5).setName('Poule 5');
        bot.channels.get(channelTeam6).setName('Poule 6');

    }

    const inscriptionChannel = message.member.guild.channels.find('id', inscriptionsolo);
    inscriptionChannel.send(`Veuillez respecter cette commande pour vous inscrire : a!inscriptionsolo votre pseudo`);

          let muterole = message.guild.roles.find(`name`, "💧 Ascalon 💧");

          inscriptionChannel.overwritePermissions(muterole, {
          SEND_MESSAGES: true
        });

        let rolejoueurtournoi = message.guild.roles.find(`name`, "JOUEUR TOURNOIS");

        //CREATE ROLE
        try{

            roletournoi = message.guild.createRole({
              name: "JOUEUR TOURNOIS",
              color: "#00ff00",
              permissions:[]
            })


          }catch(e){
            console.log(e.stack);
        }

        let roltournoi = message.guild.roles.find(`name`, "JOUEUR TOURNOIS");

        roltournoi.setMentionable(true, 'Role needs to be pinged')
        .then(updated => console.log(`Role mentionable: ${updated.mentionable}`))
        .catch(console.error);

        roltournoi.setPosition(28).then(updated => console.log(`Role position: ${updated.position}`))
        .catch(console.error);

        message.reply(`set solo complete ${bot.numermaxinscriptionsolo} :white_check_mark:`).then(message => message.delete(5000));
  },

  resetsolo: function(bot, ops) {

    let channelTeam1 = "501124673354858516";
    let channelTeam2 = "502944251026472970";
    let channelTeam3 = "502945786028490753";
    let channelTeam4 = "501124944885710859";
    let channelTeam5 = "502945846493446156";
    let channelTeam6 = "502945957705547791";

    bot.channels.get(channelTeam1).setName('Equipe 1 -');
    bot.channels.get(channelTeam2).setName('Equipe 2 -');
    bot.channels.get(channelTeam3).setName('Equipe 3 -');
    bot.channels.get(channelTeam4).setName('Equipe 4 -');
    bot.channels.get(channelTeam5).setName('Equipe 5 -');
    bot.channels.get(channelTeam6).setName('Equipe 6 -');

      ops.soloTournoi.clear();

      try {
      const clearTournoi = message.member.guild.channels.find('id', '515948520239267844');
      clearTournoi.bulkDelete(100);


      const clearEquipeInscriteTournoi = message.member.guild.channels.find('id', '482932870067912724');

      clearEquipeInscriteTournoi.bulkDelete(100);

      const clearresultattournoi = message.member.guild.channels.find('id', '503137930680860683');

      clearresultattournoi.bulkDelete(100);

      const cleainscriptionsolo = message.member.guild.channels.find('id', '511210802712412170');

      cleainscriptionsolo.bulkDelete(100);
      cleainscriptionsolo.bulkDelete(100);
      cleainscriptionsolo.bulkDelete(100);
      cleainscriptionsolo.bulkDelete(100);
      cleainscriptionsolo.bulkDelete(100);
      cleainscriptionsolo.bulkDelete(100);
      cleainscriptionsolo.bulkDelete(100);
      cleainscriptionsolo.bulkDelete(100);

      } catch(e){
        console.log(e.stack);
      }

      const inscriptionChannel = message.member.guild.channels.find('id', '511210802712412170');
      //inscriptionChannel.send(`Pseudo du joueur IG :`);

      let joueurtournoi = message.guild.roles.find(`name`, "JOUEUR TOURNOIS");

          joueurtournoi.delete('delete role')
          .then(deleted => console.log(`Deleted role ${deleted.name}`))
          .catch(console.error);


      try {
            let muterole = message.guild.roles.find(`name`, "💧 Ascalon 💧");

            inscriptionChannel.overwritePermissions(muterole, {
            SEND_MESSAGES: false
          });

        } catch(e){
          console.log(e.stack);
        }
  },
}
