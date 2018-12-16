const Discord = require("discord.js");

module.exports = {

  log: function(message, channel) {
    const joinChannel = channel.member.guild.channels.find('name', 'history-bot');
    joinChannel.send(`[LOG] ${message}`);
  },

  initsolo: function(size, bot) {

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
      return;
    }

    if(size == "20") {
        bot.channels.get(channelTeam1).setName('Poule 1');
        bot.channels.get(channelTeam2).setName('Poule 2');
        bot.channels.get(channelTeam3).setName('Poule 3');
        bot.channels.get(channelTeam4).setName('Poule 4');
        bot.channels.get(channelTeam5).setName('Poule 5');
        return;
    }

    if(size == "24") {
        bot.channels.get(channelTeam1).setName('Poule 1');
        bot.channels.get(channelTeam2).setName('Poule 2');
        bot.channels.get(channelTeam3).setName('Poule 3');
        bot.channels.get(channelTeam4).setName('Poule 4');
        bot.channels.get(channelTeam5).setName('Poule 5');
        bot.channels.get(channelTeam6).setName('Poule 6');
    }
  },
}
