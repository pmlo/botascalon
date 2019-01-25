/**
 * CREATE_INSTANT_INVITE	0x00000001	Allows creation of instant invites	T, V
KICK_MEMBERS *	0x00000002	Allows kicking members
BAN_MEMBERS *	0x00000004	Allows banning members
ADMINISTRATOR *	0x00000008	Allows all permissions and bypasses channel permission overwrites
MANAGE_CHANNELS *	0x00000010	Allows management and editing of channels	T, V
MANAGE_GUILD *	0x00000020	Allows management and editing of the guild
ADD_REACTIONS	0x00000040	Allows for the addition of reactions to messages	T
VIEW_AUDIT_LOG	0x00000080	Allows for viewing of audit logs
VIEW_CHANNEL	0x00000400	Allows guild members to view a channel, which includes reading messages in text channels	T, V
SEND_MESSAGES	0x00000800	Allows for sending messages in a channel	T
SEND_TTS_MESSAGES	0x00001000	Allows for sending of /tts messages	T
MANAGE_MESSAGES *	0x00002000	Allows for deletion of other users messages	T
EMBED_LINKS	0x00004000	Links sent by users with this permission will be auto-embedded	T
ATTACH_FILES	0x00008000	Allows for uploading images and files	T
READ_MESSAGE_HISTORY	0x00010000	Allows for reading of message history	T
MENTION_EVERYONE	0x00020000	Allows for using the @everyone tag to notify all users in a channel, and the @here tag to notify all online users in a channel	T
USE_EXTERNAL_EMOJIS	0x00040000	Allows the usage of custom emojis from other servers	T
CONNECT	0x00100000	Allows for joining of a voice channel	V
SPEAK	0x00200000	Allows for speaking in a voice channel	V
MUTE_MEMBERS	0x00400000	Allows for muting members in a voice channel	V
DEAFEN_MEMBERS	0x00800000	Allows for deafening of members in a voice channel	V
MOVE_MEMBERS	0x01000000	Allows for moving of members between voice channels	V
USE_VAD	0x02000000	Allows for using voice-activity-detection in a voice channel	V
PRIORITY_SPEAKER	0x00000100	Allows for using priority speaker in a voice channel	V
CHANGE_NICKNAME	0x04000000	Allows for modification of own nickname
MANAGE_NICKNAMES	0x08000000	Allows for modification of other users nicknames
MANAGE_ROLES *	0x10000000	Allows management and editing of roles	T, V
MANAGE_WEBHOOKS *	0x20000000	Allows management and editing of webhooks	T, V
MANAGE_EMOJIS *	0x40000000	Allows management and editing of emojis
 */

 const Discord = require("discord.js");
 const fs = require("fs");
 const bot = new Discord.Client({disableEveryone: true});
 bot.commands = new Discord.Collection();
 const token = process.env.token;
 const tools = require('./function.js');
 const db = require('quick.db');
 const ms = require("ms");

 //SOLO
 var numbersolomax = 0;
 var soloTournoi = new Map();

 //SOLO setbuildfightsolo
 var numersolobuildfightmax = 0;
 var soloBuildFightTournoi = new Map();

 //SOLO TURTLE fight
 var numersoloturtlefightmax = 0;
 var soloTurtleFightTournoi = new Map();

//DM MESSAGE
var dmMessage = new Map();
var idDm = 0;

//CHANNEL RECRUTEMENT
var channelRec = new Map();

 const serverStats = {
   guildID: '511250353430462465',
   totalUsersID: '511251090097045526',
   memberCountID: '511251296054149141',
   botCountID: '511251340119244841'
 }

 fs.readdir("./commands/", (err, files) => {

   if(err) console.log(err);

   let jsfile = files.filter(f => f.split(".").pop() === "js")
   if(jsfile.length <= 0){
     console.log("Couldn't find commands.");
     return;
   }

   jsfile.forEach((f, i) =>{
     let props = require(`./commands/${f}`);
     console.log(`${f} loaded!`);
     bot.commands.set(props.help.name, props);
   });

 });


 bot.on("ready", async () => {
   console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
   console.log(`${bot.guilds.forEach()}`);

   //bot.user.setActivity("Obéir à mon maître", {type: "WATCHING"});


   soloNumber = 0;
   numbersolomax = 0;
   numersolobuildfightmax = 0;
   numersoloturtlefightmax = 0;
   soloTournoi.clear();
   soloBuildFightTournoi.clear();
   soloTurtleFightTournoi.clear();



   //bot.user.setGame("on SourceCade!");
 });

 bot.on("message", async message => {
   if(message.author.bot) return;
   if(message.channel.type === "dm") return;

    let ops = {
      numbersolomax: numbersolomax,
      soloTournoi: soloTournoi,
      numersolobuildfightmax: numersolobuildfightmax,
      soloBuildFightTournoi: soloBuildFightTournoi,
      soloTurtleFightTournoi: soloTurtleFightTournoi,
      numersoloturtlefightmax: numersoloturtlefightmax,
      dmMessage: dmMessage,
      idDm: idDm,
      channelRec: channelRec,
    }

   let prefix = "a!";
   let messageArray = message.content.split(" ");
   let cmd = messageArray[0];
   let args = messageArray.slice(1);

   let commandfile = bot.commands.get(cmd.slice(prefix.length));
   if(commandfile) commandfile.run(bot,message,args, ops, tools);

 });

bot.on('guildMemberAdd', member => {

    const joinChannel = member.guild.channels.find('name', '👐bienvenue');
    joinChannel.send(`Bienvenue ${member.user}, avant de te divertir sur **ASCALON** je t'invite à lire le règlement . Have Fun🎉🤗 !`);

    bot.channels.get(serverStats.totalUsersID).setName(`Total Users : ${member.guild.memberCount}`); // total users
    bot.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`); // total members (not inscued bot)
    bot.channels.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`); // bot count

    let muterole = member.guild.roles.find(`name`, "💧 Ascalon 💧");
    member.addRole(muterole.id);
});

bot.on('guildMemberRemove', member => {

    bot.channels.get(serverStats.totalUsersID).setName(`Total Users : ${member.guild.memberCount}`); // total users
    bot.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`); // total members (not inscued bot)
    bot.channels.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`); // bot count
});

bot.on("message", async message => {

  let recrutementteam = [`Nom de l'équipe`, 'Plateforme','Âge minimum','Rôles disponibles','Objectif','K/D minimum', 'Nombre de top1 minimum']
  let noFound = false;

  //CHANNEL RECRUTEMENT TEAM
  if(message.channel.id == "501869668919803904") {
    if(message.member.hasPermission("ADMINISTRATOR")) {
        return;
    }

    for (var i in recrutementteam) {
    if (!message.content.toLowerCase().includes(recrutementteam[i].toLowerCase())) noFound = true;
  }
    if(noFound) {
      message.delete();

      message.author.send("Bonjour !\n \nVotre message dans le channel <#501869668919803904> ne respecte pas le modèle donné\n \nNous t'invitons à respecter le modèle ci-dessous lors de votre prochain post\n \n __Voici le formulaire à respecter pour publier son annonce : __ \n```Nom de l'équipe (avec brève description mais facultatif) :\nPlateforme :\nÂge minimum (indiquer l'âge minimum si nécessaire) :\nRôles disponibles (joueur, coach, modérateur, manager,etc...) :\nObjectif (snipe, tournoi, fun, ...) :\nK/D minimum (indiquer le K/D minimum si nécessaire) :```\n \nÂ bientôt !");
      return;
    }
    message.react("✅")
  }

});

bot.on("message", async message => {

  if(message.author.bot) return;

  if(message.channel.type !== 'text') {

    let active = await db.fetch(`support_${message.author.id}`);

    let guild = bot.guilds.get('473833367029153794');

    let channel, found = true;

    try {
      if(active) bot.channels.get(active.channelID).guild;
    }catch(e) {
      found = false;
    }

    if(!active || !found) {

      active = {};

      channel = await guild.createChannel(`${message.author.username}-${message.author.discriminator}`);

      channel = await channel.setParent('531463499550031882');

      try {
            let ascalonall = guild.roles.find(`name`, "💧 Ascalon 💧");
            let moderationrole = guild.roles.find(`name`, "🌋MODERATEUR🌋");
            let respmodorole = guild.roles.find(`name`, "staff");


            channel.overwritePermissions(ascalonall, {
            CREATE_INSTANT_INVITE: false,
            KICK_MEMBERS: false,
            BAN_MEMBERS: false,
            ADMINISTRATOR: false,
            MANAGE_CHANNELS: false,
            MANAGE_GUILD: false,
            ADD_REACTIONS: false,
            VIEW_AUDIT_LOG: false,
            VIEW_CHANNEL: false,
            SEND_MESSAGES: false
          });

          channel.overwritePermissions(moderationrole, {
          CREATE_INSTANT_INVITE: true,
          KICK_MEMBERS: true,
          BAN_MEMBERS: true,
          ADMINISTRATOR: true,
          MANAGE_CHANNELS: true,
          MANAGE_GUILD: true,
          ADD_REACTIONS: true,
          VIEW_AUDIT_LOG: true,
          VIEW_CHANNEL: true,
          SEND_MESSAGES: true
        });

        channel.overwritePermissions(respmodorole, {
        CREATE_INSTANT_INVITE: true,
        KICK_MEMBERS: true,
        BAN_MEMBERS: true,
        ADMINISTRATOR: true,
        MANAGE_CHANNELS: true,
        MANAGE_GUILD: true,
        ADD_REACTIONS: true,
        VIEW_AUDIT_LOG: true,
        VIEW_CHANNEL: true,
        SEND_MESSAGES: true
      });

        } catch(e){
          console.log(e.stack);
        }

        /**
         * CREATE_INSTANT_INVITE	0x00000001	Allows creation of instant invites	T, V
        KICK_MEMBERS *	0x00000002	Allows kicking members
        BAN_MEMBERS *	0x00000004	Allows banning members
        ADMINISTRATOR *	0x00000008	Allows all permissions and bypasses channel permission overwrites
        MANAGE_CHANNELS *	0x00000010	Allows management and editing of channels	T, V
        MANAGE_GUILD *	0x00000020	Allows management and editing of the guild
        ADD_REACTIONS	0x00000040	Allows for the addition of reactions to messages	T
        VIEW_AUDIT_LOG	0x00000080	Allows for viewing of audit logs
        VIEW_CHANNEL	0x00000400	Allows guild members to view a channel, which includes reading messages in text channels	T, V
        SEND_MESSAGES	0x00000800	Allows for sending messages in a channel	T
        SEND_TTS_MESSAGES	0x00001000	Allows for sending of /tts messages	T
        MANAGE_MESSAGES *	0x00002000	Allows for deletion of other users messages	T
        EMBED_LINKS	0x00004000	Links sent by users with this permission will be auto-embedded	T
        ATTACH_FILES	0x00008000	Allows for uploading images and files	T
        READ_MESSAGE_HISTORY	0x00010000	Allows for reading of message history	T
        MENTION_EVERYONE	0x00020000	Allows for using the @everyone tag to notify all users in a channel, and the @here tag to notify all online users in a channel	T
        USE_EXTERNAL_EMOJIS	0x00040000	Allows the usage of custom emojis from other servers	T
        CONNECT	0x00100000	Allows for joining of a voice channel	V
        SPEAK	0x00200000	Allows for speaking in a voice channel	V
        MUTE_MEMBERS	0x00400000	Allows for muting members in a voice channel	V
        DEAFEN_MEMBERS	0x00800000	Allows for deafening of members in a voice channel	V
        MOVE_MEMBERS	0x01000000	Allows for moving of members between voice channels	V
        USE_VAD	0x02000000	Allows for using voice-activity-detection in a voice channel	V
        PRIORITY_SPEAKER	0x00000100	Allows for using priority speaker in a voice channel	V
        CHANGE_NICKNAME	0x04000000	Allows for modification of own nickname
        MANAGE_NICKNAMES	0x08000000	Allows for modification of other users nicknames
        MANAGE_ROLES *	0x10000000	Allows management and editing of roles	T, V
        MANAGE_WEBHOOKS *	0x20000000	Allows management and editing of webhooks	T, V
        MANAGE_EMOJIS *	0x40000000	Allows management and editing of emojis
         */

    /*  channel = await guild.channels.create(`${message.author.username}-${message.author.discriminator}`, {
        parent: '531463499550031882',
        topic: `?complete to close the ticket | Support for ${message.author.tag} | ID : ${message.author.id}`
      });*/

      let author = message.author;

      const newChannel = new Discord.RichEmbed()
      .setColor(0x36393e)
      .setAuthor(author.tag)
      .setFooter('Support Ticket Created')
      .addField('User', author)
      .addField('ID', author.id)

      await channel.send(newChannel);

      /*const newTicket = new Discord.RichEmbed()
      .setColor(0x36393e)
      .setAuthor(`Hello, ${author.tag}`)
      .setFooter('Support Ticket Created')

      await author.send(newTicket);*/

      author.send(":flag_mf: Merci d'avoir contacté le support ! Un membre du staff va vous contactez dans les plus brefs délais \n:flag_lr: Thank you for contacting the support ! A member of the staff will contact you as soon as possible");
    //  author.send(":flag_lr: Thank you for contacting the support ! A member of the staff will contact you as soon as possible");

      active.channelID = channel.id;
      active.targetID = author.id;

    }


    channel = bot.channels.get(active.channelID);

    /*const dm = new Discord.RichEmbed()
    .setColor(0x36393e)
    .setAuthor(`Thanks you, ${message.author.tag}`)
    .setFooter(`Your message has been sent -- A staff member will be in contact soon`)

    await message.author.send(dm);*/

    message.author.send(":flag_mf: Votre message a été envoyé \n:flag_lr: Your message has been sent");
  //  message.author.send(":flag_lr: Your message has been sent");

    const embed = new Discord.RichEmbed()
    .setColor(0x36393e)
    .setAuthor(message.author.tag)
    .setDescription(message.content)
    .setFooter(`Message Recieved -- ${message.author.tag}`)

    await channel.send(embed);

    db.set(`support_${message.author.id}`, active);
    db.set(`supportChannel_${channel.id}`, message.author.id);
    return;
  }

  let support = await db.fetch(`supportChannel_${message.channel.id}`);

  if(support) {

    support = await db.fetch(`support_${support}`);

    let supportUser = bot.users.get(support.targetID);
    if(!supportUser) return message.channel.delete();

    if(message.content.toLowerCase() == '?complete') {

        /*const complete = new Discord.RichEmbed()
        .setColor(0x36393e)
        .setAuthor(`Hey, ${supportUser.tag}`)
        .setFooter('Ticket Closed')
        .setDescription('*Your ticket has been marked as **complete**. If you wish to reopen this.')

        supportUser.send(complete);*/

        message.channel.delete();

        db.delete(`support_${support.targetID}`);
        return;
          }

    /*const embed = new Discord.RichEmbed()
    .setColor(0x36393e)
    .setAuthor(message.author.tag)
    .setFooter(`Message Recieved -- Zayn`)
    .setDescription(message.content)*/

    bot.users.get(support.targetID).send(message.content)
    //bot.users.get(support.targetID).send(embed)

    message.delete();

    //embed.setFooter(`Message Sent -- ${supportUser.tag}`).setDescription(message.content);

    return message.channel.send(message.content); //message.channel.send(embed);
  }

    // Part 1 : checking & removing the text
    //1 blacklisted words
  let blacklisted = ['discord.gg'] //words put , after the word

  //2 looking for words
  let foundInText = false;
  for (var i in blacklisted) { // loops through the blacklisted list
    if(message.channel.name == "👍partenariat" || message.channel.name == "🤝échange-de-pub🤝" || message.member.hasPermission("MANAGE_CHANNELS")) {
        return;
    }

    if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
  }
  // checks casesensitive words

  //3 deletes and send message
    if (foundInText) {
      //message delete
      message.delete();
      //message send to author
      message.author.send('La pub de discord sur le serveur ASCALON est interdite !');
      //message channel send to author for advertissment
      message.channel.send(`<@${message.author.id}> Bonjour, la pub de serveur discord est interdite. Dernière avertissement avant le ban`).then(message => message.delete(5000));


    }




  });

  bot.login(token);

  // LANCEMENT DE GAME, INSCRIPTION, (CLASSEMENT)


















/**

bot.on('message', async message => {

//  if(!message.author.bot) return;

  if(message.channel.type !== "text") {

//  if (message.channelType.toUpperCase() !== 'text')﻿ {

    let active = await db.fetch(`support_${message.author.id}`);

    let guild = bot.guilds.get('473833367029153794');

    let channel, found = true;

    try {
      if(active) bot.channels.get(active.channelID).guild;

    } catch(e) {
      found = false;
    }

    if (!active || !found) {
      active = {};

      /*channel = await guild.createChannel(`${message.author.name} Bonjour`, '531220528778706945', [{
        id: guild,
        deny: ['MANAGE_MESSAGES'],
        allow: ['SEND_MESSAGES']
      }])
      .then(console.log)
      .catch(console.error);

    let author = message.author;

    channel = await guild.createChannel(`${author.name}--ticket`);

    channel = await channel.setParent('531220528778706945');

    const newChannel = new Discord.RichEmbed()
    .setColor(0x36393e)
    .setAuthor(author.tag)
    .setFooter('Support Ticket Created')
    .addField('User', message.author)
    .addField('ID', author.id)

    await channel.send(newChannel);

    const newTicket = new Discord.RichEmbed()
    .setColor(0x36393e)
    .setAuthor(`Hello ${author.tag}`)
    .setFooter('Support Ticket')

    await author.send(newTicket);

    active.channelID = channel.id;
    active.targetID = author.id;


  channel = bot.channels.get(active.channelID);

  const dm = new Discord.RichEmbed()
  .setColor(0x36393e)
  .setAuthor(`Thanks you, ${author.tag}`)
  .setFooter(`Your message has been sent -- a staff member will be in contact soon`)

  await message.author.send(dm);

  const embed = new Discord.RichEmbed()
  .setColor(0x36393e)
  .setAuthor(author.tag)
  .setDescription(message.content)
  .setFooter(`Message Recieved -- ${author.tag}`)


  await channel.send(embed);

  db.set(`support_${author.id}`, active);
  db.set(`supportChannel${channel.id}`, author.id);
  return;
}

let support = await db.fetch(`supportChannel_${message.channel.id}`);

if(support) {

support = await db.fetch(`support_${support}`);

let supportUser = bot.users.get(support.targetID);
if(!supportUser) return message.channel.delete();

if(message.content.toLowerCase() == '?complete') {

  const complete = new Discord.RichEmbed()
  .setColor(0x36393e)
  .setAuthor(`Hey, ${supportUser.tag}`)
  .setFooter('Ticket Cloed -- Zayn')
  .setDescription('*Your ticket has been marked as **complete**. If you wish to reopen this, or create a new one, please send a message to bot.')

  supportUser.send(complete);

  message.channel.delete();

  db.delete(`support_${support.targetID}`);
}

const embed = new Discord.RichEmbed()
.setColor(0x36393e)
.setAuthor(message.author.tag)
.setFooter(`Message recieved -- Zayn`)
.setDescription(message.content)

bot.users.get(support.targetID).send(embed);

message.delete({timeout : 1000});

embed.setFooter(`Message Sent -- ${supportUser.tag}`).setDescription(message.content);

return message.channel.send(embed);

}



}
});

**/














  /**
  //MESSAGE REACTION ADD
  bot.on('messageReactionAdd', (reaction, user) => {

      //CHANNEL ID
      channelID = reaction.message.channel.id;
      //IF CHANNEL ID = 495909946672807947 && EMOJI IS :notif_discord:
      if(reaction.emoji.name == ":notif_discord:" && channelID == "495909946672807947") {
      //CLIENT ID
      client_id = client.users.get("name", user.username).id;
      }
  });
  **/
















/*client.on(`message`, message => {

     if(!message.content.startsWith(config.prefix)) return;
    var args = message.content.substring(config.prefix.length).split(" ");

    switch (args[0].toLowerCase()) {

        //message.delete();
        //client.channels.get("510162232659673128").sendMessage("Utilisateur " + member.toLowerCase() + " n'existe pas.");

        //MUTE
        case "mute":
        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
            message.delete();
            message.author.send("Bonjourn vous avez essayer d'éxecuter la commande a!mute mais vous n'avez pas la permission.");
        } else {

            let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

        }


        break;


        //BAN
        case "ban":

       if(!message.channel.permissionsFor(message.member).hasPermission("BAN_MEMBERS")) {
        message.delete();
        message.author.send("Bonjour, vous avez essayer d'éxecuter la commande a!ban mais vous n'avez pas la permission ^^");

    } else {

        var member = message.mentions.members.first();

        if(!member) {

         client.channels.get("510162232659673128").sendMessage(`${message.author.username} just tried ban ` + member);

         message.author.send("Bonjour, vous avez essayer d'éxecuter la commande a!ban mais la personne ciblée n'existe pas ^^");

         message.delete();

        } else {
            if(!member.bannable) {

             message.author.send("Bonjour, l'utilisateur ne peut être ban");

             message.delete();

            } else {

              message.guild.member(member).ban("ASCALON BOT");

              client.channels.get("510162232659673128").sendMessage(`ban ` + member).then(function (message) {

                //ADD REACT

                message.react("✅")

                      }); //+ `${message.author.username}`);

            //DELETING MESSAGE a!kick ....

            message.delete();

              break;

            }
        }
    }

        break;



        //KICK

        case "kick":

        //IF MEMBER NOT PERMISSION *KICK_MEMBERS

       if(!message.channel.permissionsFor(message.member).hasPermission("KICK_MEMBERS")) {
           message.delete();
           message.author.send("Bonjour, vous avez essayer d'éxecuter la commande a!kick mais vous n'avez pas la permission ^^");

       } else {

           //var MEMBER MENTION @JFEKJF#0000

           var member = message.mentions.members.first();

           //if not member, @ = null

           if(!member) {

            //SEND MESSAGE CHANNEL "History-Bot"

            client.channels.get("510162232659673128").sendMessage(`${message.author.username} just tried kick ` + member);

            //SEND TO AUTHOR MESSAGE AVERT NO SUCCES

            message.author.send("Bonjour, vous avez essayer d'éxecuter la commande a!kick mais la personne ciblée n'existe pas ^^");

            //DELETE MESSAGE

            message.delete();

           } else {

                //IF MEMBER NOT KICKABLE

               if(!member.kickable) {

                //SEND TO AUTHOR MESSAGE

                message.author.send("Bonjour, l'utilisateur ne peut être kick");

                //MESSAGE DELETED

                message.delete();

               } else {

                   //KICK MEMBER

                   member.kick().then((member) => {

                    //SEND MESSAGE TO HISTORY BOT

                    client.channels.get("510162232659673128").sendMessage(`kick ` + member).then(function (message) {

                        //ADD REACT

                        message.react("✅")

                              }); //+ `${message.author.username}`);

                    //DELETING MESSAGE a!kick ....

                    message.delete();

                   });
               }
           }
       }
    }

});*/
