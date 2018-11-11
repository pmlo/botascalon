const ytdl = require('ytdl-core');
const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {

    let channelTeam1 = "501124673354858516";
    let channelTeam2 = "502944251026472970";
    let channelTeam3 = "502945786028490753";
    let channelTeam4 = "501124944885710859";

    bot.channels.get(channelTeam1).setName('Poule 1');
    bot.channels.get(channelTeam2).setName('Poule 2');
    bot.channels.get(channelTeam3).setName('Poule 3');
    bot.channels.get(channelTeam4).setName('Poule 4');

    
    
};



module.exports.help = {
    name: "solo"
  }