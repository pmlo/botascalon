const Discord = require("discord.js");
var bot = new Discord.Client();
const token = process.env.token;
const fs = require("fs");

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

  //bot.user.setGame("on SourceCade!");
});


bot.on("message", async message => {

    //Return Statements
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  //MUSIC BOT
  let ops = {
      active: active
  }


  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args, ops);
});


bot.on('guildMemberAdd', member => {
    console.log(`lklkmklmk`);

   // if (member.guild.id !== serverStats.guildID) return;

   member.sendMessage("POUR SOUTENIR LA ASCALON ALLEZ NOUS SUIVRE SUR TWITTER   https://twitter.com/ASCALONCUP");

    bot.channels.get(serverStats.totalUsersID).setName(`Total Users : ${member.guild.memberCount}`); // total users
    bot.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`); // total members (not inscued bot)
    bot.channels.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`); // bot count
    
});

bot.on('guildMemberRemove', member => {

    console.log(`lklkmklmk`);

    bot.channels.get(serverStats.totalUsersID).setName(`Total Users : ${member.guild.memberCount}`); // total users
    bot.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`); // total members (not inscued bot)
    bot.channels.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`); // bot count

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

    //RESULTAT

    if(message.channel.name == "🎲résultat") {

        if (!message.content.includes("=")) {
            //Message delete
            message.delete();
            //send message to author message
            message.author.send("Bonjour, vous avez essayer de mettre un message qui n'est pas en rapport aux résultats.");
            } else {
                message.react("✅");
            }
        }


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
        //IS CHANNEL "🌀inscription-solo-off"
    } else if(message.channel.name == "🌀inscription-solo-off") {
        if(message.member.hasPermission("ADMINISTRATOR")) {
            return;
        }
        //message deleted
        message.delete();
        //message author send
        message.author.send("Bonjour, vous avez essayer de vous inscire à un tournoi ASCALON Solo, les inscriptiosn sont fermées.");
    }

    //INSCRIPTION DUO

    if(message.channel.name == "🌀inscription-duo-on") {

        //if message not include "NOM DE TEAM :", "J1", "J2", "@"
        if (!message.content.includes("Nom de l'équipe") || !message.content.includes("@") || !message.content.includes("Joueur 1") || !message.content.includes("Joueur 1")) {
            //Message delete
            message.delete();
            //send message to author message
            message.author.send("Bonjour, vous avez essayer de vous inscire à un tournoi ASCALON Duo, hélas vous n'avez pas respecter le modèle.");
            message.author.send("Nom de l'équipe :");
            message.author.send("Joueur 1 :               @MENTION");
            message.author.send("Joueur 2 :                @MENTION");
            } else {
                message.react("✅");
            }
            //IS CHANNEL "🌀inscription-solo-off"
        } else if(message.channel.name == "🌀inscription-duo-off") {
            if(message.member.hasPermission("ADMINISTRATOR")) {
                return;
            }
            message.delete();
            message.author.send("Bonjour, vous avez essayer de vous inscire à un tournoi ASCALON Duo, les inscriptiosn sont fermées.");
       }
    });


client.login(token);
