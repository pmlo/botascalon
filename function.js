const Discord = require("discord.js");

module.exports = {

  log: function(message, channel) {
    const joinChannel = channel.member.guild.channels.find('name', 'history-bot');
    joinChannel.send(`[LOG] ${message}`);
  },

  failed: function(message, channel) {
    const logChannel = channel.member.guild.channels.find('id', channel.id);
    logChannel.send('${message}');
  },

  setsolo : function(size, bot, message) {
    const inscriptionsolo = "511210802712412170";
    bot.channels.get(inscriptionsolo).setName("🌀inscription-solo-on");

    const poule1 = "501124673354858516";
    const poule2 = "502944251026472970";
    const poule3 = "502945786028490753";
    const poule4 = "501124944885710859";
    const poule5 = "502945846493446156";
    const poule6 = "502945957705547791";

    if(size == 16) {
      bot.channels.get(poule1).setName("Poule 1");
      bot.channels.get(poule2).setName("Poule 2");
      bot.channels.get(poule3).setName("Poule 3");
      bot.channels.get(poule4).setName("Poule 4");
      return;
    }
    if(size == 20) {
      bot.channels.get(poule1).setName("Poule 1");
      bot.channels.get(poule2).setName("Poule 2");
      bot.channels.get(poule3).setName("Poule 3");
      bot.channels.get(poule4).setName("Poule 4");
      bot.channels.get(poule5).setName("Poule 5");
      return;
    }
    if(size == 24) {
      bot.channels.get(poule1).setName("Poule 1");
      bot.channels.get(poule2).setName("Poule 2");
      bot.channels.get(poule3).setName("Poule 3");
      bot.channels.get(poule4).setName("Poule 4");
      bot.channels.get(poule5).setName("Poule 5");
      bot.channels.get(poule6).setName("Poule 6");
      return;
    }
    bot.channels.get(poule1).setName("Poule 1");
    bot.channels.get(poule2).setName("Poule 2");
    bot.channels.get(poule3).setName("Poule 3");
    bot.channels.get(poule4).setName("Poule 4");

    //CREATE ROLE
    try{

        roletournoi =  message.guild.createRole({
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

        let roletournoilol = member.guild.roles.find(`name`, "JOUEUR TOURNOIS");
        member.addRole(roletournoilol.id);
  },

  clearsolo : function(bot, ops, message) {
    const inscriptionsolo = "511210802712412170";
    bot.channels.get(inscriptionsolo).setName("🌀inscription-solo-off");

    const equipeinscrite = message.member.guild.channels.find('name', '🚻equipe-inscrite');
    const inscriptionsoloedt = message.member.guild.channels.find('id', '511210802712412170');
    equipeinscrite.bulkDelete(20);
    inscriptionsoloedt.bulkDelete(30);

    //ROLE JOUEUR TOURNOI DELETE
    let joueurtournoi = message.guild.roles.find(`name`, "JOUEUR TOURNOIS");

        joueurtournoi.delete('delete role')
        .then(deleted => console.log(`Deleted role ${deleted.name}`))
        .catch(console.error);

var inscriptionChannel = "511210802712412170";
        //PERMISSION ASCALON ROLE | SEND MESSAGE  : false
    try {
          let muterole = message.guild.roles.find(`name`, "💧 Ascalon 💧");

          inscriptionChannel.overwritePermissions(muterole, {
          SEND_MESSAGES: false
        });

      } catch(e){
        console.log(e.stack);
      }

    const poule1 = "501124673354858516";
    const poule2 = "502944251026472970";
    const poule3 = "502945786028490753";
    const poule4 = "501124944885710859";
    const poule5 = "502945846493446156";
    const poule6 = "502945957705547791";

    bot.channels.get(poule1).setName("Equipe 1 -");
    bot.channels.get(poule2).setName("Equipe 2 -");
    bot.channels.get(poule3).setName("Equipe 3 -");
    bot.channels.get(poule4).setName("Equipe 4 -");
    bot.channels.get(poule5).setName("Equipe 5 -");
    bot.channels.get(poule6).setName("Equipe 6 -");

    ops.soloTournoi.clear();
    bot.numbersolomax = 0;
  },

  setbuildfightsolo : function(size, bot, message) {
    const inscriptionsolo = "529674447859482654";
    bot.channels.get(inscriptionsolo).setName("🌀inscription-solo-buildfight-on");

    const poule1 = "501124673354858516";
    const poule2 = "502944251026472970";
    const poule3 = "502945786028490753";
    const poule4 = "501124944885710859";
    const poule5 = "502945846493446156";
    const poule6 = "502945957705547791";

    if(size == 16) {
      bot.channels.get(poule1).setName("Poule 1");
      bot.channels.get(poule2).setName("Poule 2");
      bot.channels.get(poule3).setName("Poule 3");
      bot.channels.get(poule4).setName("Poule 4");
      return;
    }
    if(size == 20) {
      bot.channels.get(poule1).setName("Poule 1");
      bot.channels.get(poule2).setName("Poule 2");
      bot.channels.get(poule3).setName("Poule 3");
      bot.channels.get(poule4).setName("Poule 4");
      bot.channels.get(poule5).setName("Poule 5");
      return;
    }
    if(size == 24) {
      bot.channels.get(poule1).setName("Poule 1");
      bot.channels.get(poule2).setName("Poule 2");
      bot.channels.get(poule3).setName("Poule 3");
      bot.channels.get(poule4).setName("Poule 4");
      bot.channels.get(poule5).setName("Poule 5");
      bot.channels.get(poule6).setName("Poule 6");
      return;
    }
    bot.channels.get(poule1).setName("Poule 1");
    bot.channels.get(poule2).setName("Poule 2");
    bot.channels.get(poule3).setName("Poule 3");
    bot.channels.get(poule4).setName("Poule 4");

    /*
    //CREATE ROLE
    try{

        roletournoi =  message.guild.createRole({
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

        */

    let roletournoilol = message.member.guild.roles.find(`name`, "JOUEUR TOURNOIS");
    member.addRole(roletournoilol.id);
  },

  clearbuildfightsolo : function(bot, ops, message) {
    const inscriptionsolo = "529674447859482654";
    bot.channels.get(inscriptionsolo).setName("🌀inscription-solo-buildfight-off");

    const equipeinscrite = message.member.guild.channels.find('name', '🚻equipe-inscrite');
    const inscriptionsoloedt = message.member.guild.channels.find('id', '529674447859482654');
    equipeinscrite.bulkDelete(20);
    inscriptionsoloedt.bulkDelete(30);

    //ROLE JOUEUR TOURNOI DELETE
    let joueurtournoi = message.guild.roles.find(`name`, "JOUEUR TOURNOIS");

        joueurtournoi.delete('delete role')
        .then(deleted => console.log(`Deleted role ${deleted.name}`))
        .catch(console.error);

        //PERMISSION ASCALON ROLE | SEND MESSAGE  : false
    try {
          let muterole = message.guild.roles.find(`name`, "💧 Ascalon 💧");

          var inscriptionChannel = "529674447859482654";
          inscriptionChannel.overwritePermissions(muterole, {
          SEND_MESSAGES: false
        });

      } catch(e){
        console.log(e.stack);
      }

    const poule1 = "501124673354858516";
    const poule2 = "502944251026472970";
    const poule3 = "502945786028490753";
    const poule4 = "501124944885710859";
    const poule5 = "502945846493446156";
    const poule6 = "502945957705547791";

    bot.channels.get(poule1).setName("Equipe 1 -");
    bot.channels.get(poule2).setName("Equipe 2 -");
    bot.channels.get(poule3).setName("Equipe 3 -");
    bot.channels.get(poule4).setName("Equipe 4 -");
    bot.channels.get(poule5).setName("Equipe 5 -");
    bot.channels.get(poule6).setName("Equipe 6 -");

    ops.soloBuildFightTournoi.clear();
    bot.numersolobuildfightmax = 0;
  },

  setturtlefightsolo : function(size, bot, message) {
    const inscriptionsolo = "529654956538462209";
    bot.channels.get(inscriptionsolo).setName("🌀inscription-solo-turtle-fight-on");

    const poule1 = "501124673354858516";
    bot.channels.get(poule1).setName("Turtle Fight");

    //CREATE ROLE

    try{

        roletournoi =  message.guild.createRole({
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

    //ROLE TOURNOI UPDATE POSITION 28
    roltournoi.setPosition(28).then(updated => console.log(`Role position: ${updated.position}`))
        .catch(console.error);

    let guild = bot.guilds.get('473833367029153794')
    let roletournoilol = guild.roles.find(`name`, "JOUEUR TOURNOIS");
    message.member.addRole(roletournoilol.id);
  },

  clearturtlefightsolo : function(bot, ops, message) {

    let guild = bot.guilds.get('473833367029153794');
    const inscriptionsolo = "529654956538462209";
    bot.channels.get(inscriptionsolo).setName("🌀inscription-solo-turtle-fight-off");

    const equipeinscrite = message.member.guild.channels.find('name', '🚻equipe-inscrite');
    const inscriptionsoloedt = message.member.guild.channels.find('id', '529654956538462209');
    equipeinscrite.bulkDelete(20);
    inscriptionsoloedt.bulkDelete(30);


    //ROLE JOUEUR TOURNOI DELETE
    let joueurtournoi = guild.roles.find(`name`, "JOUEUR TOURNOIS");

        joueurtournoi.delete('delete role')
        .then(deleted => console.log(`Deleted role ${deleted.name}`))
        .catch(console.error);

        //PERMISSION ASCALON ROLE | SEND MESSAGE  : false


        var inscriptionChannel = "529654956538462209";
    try {
          let muterole = guild.roles.find(`name`, "💧 Ascalon 💧");

          inscriptionChannel.overwritePermissions(muterole, {
          SEND_MESSAGES: false
        });

      } catch(e){
        console.log(e.stack);
      }


    const poule1 = "501124673354858516";
    const poule2 = "502944251026472970";
    const poule3 = "502945786028490753";
    const poule4 = "501124944885710859";
    const poule5 = "502945846493446156";
    const poule6 = "502945957705547791";

    bot.channels.get(poule1).setName("Equipe 1 -");
    bot.channels.get(poule2).setName("Equipe 2 -");
    bot.channels.get(poule3).setName("Equipe 3 -");
    bot.channels.get(poule4).setName("Equipe 4 -");
    bot.channels.get(poule5).setName("Equipe 5 -");
    bot.channels.get(poule6).setName("Equipe 6 -");

    ops.soloTurtleFightTournoi.clear();
    bot.numersoloturtlefightmax = 0;
  },

  setduo : function (bot,ops,message) {
    const inscriptionsolo = "488462538283941910";
    bot.channels.get(inscriptionsolo).setName("🌀inscription-duo-on");

    try{

        roletournoi =  message.guild.createRole({
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

    //ROLE TOURNOI UPDATE POSITION 28
    roltournoi.setPosition(28).then(updated => console.log(`Role position: ${updated.position}`))
    .catch(console.error);

    let guild = bot.guilds.get('473833367029153794')
    let roletournoilol = guild.roles.find(`name`, "JOUEUR TOURNOIS");
    message.member.addRole(roletournoilol.id);
  },

  clearduo : function (bot,ops, message) {

    let guild = bot.guilds.get('473833367029153794');
    const inscriptionsolo = "488462538283941910";
    bot.channels.get(inscriptionsolo).setName("🌀inscription-duo-on");

    const equipeinscrite = message.member.guild.channels.find('name', '🚻equipe-inscrite');
    const inscriptionsoloedt = message.member.guild.channels.find('id', '488462538283941910');
    equipeinscrite.bulkDelete(20);
    inscriptionsoloedt.bulkDelete(30);


    //ROLE JOUEUR TOURNOI DELETE
    let joueurtournoi = guild.roles.find(`name`, "JOUEUR TOURNOIS");

        joueurtournoi.delete('delete role')
        .then(deleted => console.log(`Deleted role ${deleted.name}`))
        .catch(console.error);

        //PERMISSION ASCALON ROLE | SEND MESSAGE  : false

        
        var inscriptionChannel = "488462538283941910";
    try {
          let muterole = guild.roles.find(`name`, "💧 Ascalon 💧");

          inscriptionChannel.overwritePermissions(muterole, {
          SEND_MESSAGES: false
        });

      } catch(e){
        console.log(e.stack);
      }


    const poule1 = "501124673354858516";
    const poule2 = "502944251026472970";
    const poule3 = "502945786028490753";
    const poule4 = "501124944885710859";
    const poule5 = "502945846493446156";
    const poule6 = "502945957705547791";
    const poule7 = "502946007634673666";
    const poule8 = "502946036428439572";
    const poule9 = "502946085145149464";
    const poule10 = "502946189499432971";
    const poule11 = "502946284064342026";
    const poule12 = "502946333045424134"
    const poule13 = "502946388686929920";
    const poule14 = "502946460279635988";
    const poule15 = "502946556186722306";
    const poule16 = "502946621332520981"

    bot.channels.get(poule1).setName("Equipe 1 -");
    bot.channels.get(poule2).setName("Equipe 2 -");
    bot.channels.get(poule3).setName("Equipe 3 -");
    bot.channels.get(poule4).setName("Equipe 4 -");
    bot.channels.get(poule5).setName("Equipe 5 -");
    bot.channels.get(poule6).setName("Equipe 6 -");

    bot.channels.get(poule7).setName("Equipe 7 -");
    bot.channels.get(poule8).setName("Equipe 8 -");
    bot.channels.get(poule9).setName("Equipe 9 -");
    bot.channels.get(poule10).setName("Equipe 10 -");
    bot.channels.get(poule11).setName("Equipe 11 -");
    bot.channels.get(poule12).setName("Equipe 12 -");

    bot.channels.get(poule13).setName("Equipe 13 -");
    bot.channels.get(poule14).setName("Equipe 14 -");
    bot.channels.get(poule15).setName("Equipe 15 -");
    bot.channels.get(poule16).setName("Equipe 16 -");



  },


































  initsolo: function(size, bot, ops, message) {

    let inscriptionsolo = "511210802712412170";
    bot.channels.get(inscriptionsolo).setName("🌀inscription-solo-on");

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

    bot.numbersolomax=size;

    const inscriptionChannel = message.member.guild.channels.find('id', inscriptionsolo);
    inscriptionChannel.send(`Veuillez respecter cette commande pour vous inscrire : a!solo votre pseudo`);

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

        message.reply(`set solo complete ${bot.numbersolomax} :white_check_mark:`).then(message => message.delete(5000));
  },

  resetsolo: function(bot, ops, message) {

    let inscriptionsolo = "511210802712412170";
    bot.channels.get(inscriptionsolo).setName("🌀inscription-solo-off");

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
      const clearTournoi = message.member.guild.channels.find('id', '523632020081999904');
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
