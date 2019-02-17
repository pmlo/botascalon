const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops, tools) => {



    //si l'argument 0 ou 1 (a!ban args[0] and args[1])
    if(args[0] == null || args[1] == null) {

        //message deleted
        message.delete();

        //Return
        return;
    }

    //if author message has not permission "BAN_MEMBERS"
    if(!message.channel.permissionsFor(message.member).hasPermission("BAN_MEMBERS")) {

        //message deleted
        message.delete();

        //LOG
        tools.log(message.author.name + "NOT PERMISSION TO BAN PLAYER", message)

        //Return
        return;
    }

    //recup id mention
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    //if not existe
    if(!rUser) {
        //send message DM
        message.author.send("Bonjour, vous avez essayer d'éxecuter la commande a!ban mais la personne ciblée n'existe pas");

        //message deleted
        message.delete();

        //Return
        return;
    }

    //recup mention first of message
    var member = message.mentions.members.first();

    //id not bannable
    if(!member.bannable) {

        //send message to author
        message.author.send("Bonjour, l'utilisateur ne peut être ban");

        //message deleted
        message.delete();

        //Return
        return;
    }

    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Ban")
    .setColor("#15f153")
    .addField("Ban User", `${rUser}`)
    .addField("Ban par", `${message.author}`)
    .addField("Raison du ban", rreason);

    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: "ASCALON BOT",
          icon_url: "https://i.imgur.com/r1T3PbX.png"
        },
        title: `Le joueur ${member.user.username} est banni, raison : ${rreason} !`,
        timestamp: new Date(),
        footer: {
          icon_url: "https://i.imgur.com/318H4Xw.png",
          text: "© Created by Zayn#0607"
        }
      }
    }).then(message => message.delete(30000));


    message.guild.member(member).ban(rreason);

    const joinChannel = message.member.guild.channels.find('name', 'history-bot');
    joinChannel.send(`[LOG] USER ${rUser} BANNED by ${message.author} for reason ${rreason}`);

    let banchannel = message.guild.channels.find('name', 'sanction_modération');
    let banchannelsanction = message.guild.channels.find(`id`, "509790654113644571");

    if(!banchannel) return;


    message.delete();
    banchannel.send(reportEmbed);

    if(!banchannelsanction) return;
    message.delete();
    banchannelsanction.send(reportEmbed);
}

module.exports.help = {
  name: "ban"
}
