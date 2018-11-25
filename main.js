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
let token = process.env.token;

//INSCRIPTION SOLO
var numberisinscriptionsolo = 0;
var numermaxinscriptionsolo = 0;
var soloTournoi = new Map();

const active = new Map();


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

  bot.user.setActivity("Obéir à son maître", {type: "WATCHING"});

});


bot.on("message", async message => {

    //Return Statements
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let ops = {
      active: active,
      soloTournoi: soloTournoi,
  }


  let prefix = "a!";
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args, ops);
});


bot.on('guildMemberAdd', member => {

    const joinChannel = member.guild.channels.find('name', '👐bienvenue');
    joinChannel.send(`Bienvenue ${member.user}, avant de te divertir sur **ASCALON** je t'invite à lire le règlement . Have Fun🎉🤗 !`);


   //member.sendMessage("POUR SOUTENIR LA ASCALON ALLEZ NOUS SUIVRE SUR TWITTER   https://twitter.com/ASCALONCUP");

    bot.channels.get(serverStats.totalUsersID).setName(`Total Users : ${member.guild.memberCount}`); // total users
    bot.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`); // total members (not inscued bot)
    bot.channels.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`); // bot count
    
    const logChannel = member.guild.channels.find('name', 'history-bot');
    logChannel.send(`[LOG] TOTAL USERS CHANGED + ${member.guild.memberCount}`);
    logChannel.send(`[LOG] MEMBER COUNT CHANGED + ${member.guild.members.filter(m => !m.user.bot).size}`);
    logChannel.send(`[LOG] BOT COUNT CHANGED + ${member.guild.members.filter(m => m.user.bot).size}`);
    //logChannel.send(`[LOG] MP MESSAGE SEND TO ${member.user}`);

    let muterole = member.guild.roles.find(`name`, "💧 Ascalon 💧");
    member.addRole(muterole.id);
});

bot.on('guildMemberRemove', member => {

    bot.channels.get(serverStats.totalUsersID).setName(`Total Users : ${member.guild.memberCount}`); // total users
    bot.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`); // total members (not inscued bot)
    bot.channels.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`); // bot count

    const logChannel = member.guild.channels.find('name', 'history-bot');
    logChannel.send(`[LOG] TOTAL USERS CHANGED - ${member.guild.memberCount}`);
    logChannel.send(`[LOG] MEMBER COUNT CHANGED - ${member.guild.members.filter(m => !m.user.bot).size}`);
    logChannel.send(`[LOG] BOT COUNT CHANGED - ${member.guild.members.filter(m => m.user.bot).size}`);
    logChannel.send(`[LOG] MP MESSAGE SEND TO ${member.user}`);
});






//MESSAGE EVENT

bot.on("message", async message => {

    
    // Part 1 : checking & removing the text
    //1 blacklisted words
  let blacklisted = ['discord.gg'] //words put , after the word

  //2 looking for words
  let foundInText = false;
  for (var i in blacklisted) { // loops through the blacklisted list
    if(message.channel.name == "👍partenariat" || message.channel.name == "🤝échange-de-pub🤝") {
        const joinChannel = message.member.guild.channels.find('name', 'history-bot');
        joinChannel.send(`[LOG] BYPASS NOT LINK DISCORD ${message.member.user}`);
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
    
      log("")
      //const joinChannel = message.member.guild.channels.find('name', 'history-bot');
    //joinChannel.send(`[LOG] REMOVE DISCORD LINK ${message.member.user}`);
    log
    }

    //RESULTAT

    /**if(message.channel.name == "🎲résultat") {

        if (!message.content.includes("=")) {
            //Message delete
            message.delete();
            //send message to author message
            message.author.send("Bonjour, vous avez essayer de mettre un message qui n'est pas en rapport aux résultats.");
            } else {
                message.react("✅");
                const joinChannel = message.member.guild.channels.find('name', 'history-bot');
                joinChannel.send(`[LOG] RESULT CONFIRMED ${message.member.user}`);
            }
        }**/

/*
   //INSCRIPTION

    //IF MESSAGE IS "🌀inscription-solo-on"
    if(message.channel.name == "🌀inscription-solo-on") {

    if (!message.content.includes("Pseudo du joueur IG :") || !message.content.includes("@")) {
        //Message delete
        message.delete();
        //send message to author message
        message.author.send("Bonjour, vous avez essayer de vous inscire à un tournoi ASCALON Solo, hélas vous n'avez pas respecter le modèle.");
        message.author.send("Pseudo du joueur IG : @<votre mention>");
        } else {
            message.react("✅");
            message.delete("Pseudo du joueur IG :");
        }
        
    } 
    //INSCRIPTION DUO

    if(message.channel.name == "🌀inscription-duo-on") {

        //if message not include "NOM DE TEAM :", "J1", "J2", "@"
        if (!message.content.includes("NOM DE TEAM") || !message.content.includes("@") || !message.content.includes("J1") || !message.content.includes("J2")) {
            //Message delete
            message.delete();
            //send message to author message
            message.author.send("Bonjour, vous avez essayer de vous inscire à un tournoi ASCALON Duo, hélas vous n'avez pas respecter le modèle.");
            message.author.send("Nom de l'équipe :");
            message.author.send("J1 :               @MENTION");
            message.author.send("J2 :                @MENTION");
            } else {
                message.react("✅");
            }
                    } */
                    
    });


  bot.login(token);

  // LANCEMENT DE GAME, INSCRIPTION, (CLASSEMENT)

















































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
