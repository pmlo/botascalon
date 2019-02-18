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

  embed: function(message,channel, boolean, time) {
    const history_channel = message.member.guild.channels.find('name', channel);

    if(boolean == "true") {
    history_channel.send({embed: {
      color: FF2D00,
      author: {
        name: "ASCALON BOT",
        icon_url: "https://i.imgur.com/r1T3PbX.png"
      },
      title: `${message}`,
      timestamp: new Date(),
      footer: {
        icon_url: "https://i.imgur.com/318H4Xw.png",
        text: "© Created by Zayn#0607"
      }
    }
  }).then(message => message.delete(time));
  return;
    }

    history_channel.send({embed: {
      color: FF2D00,
      author: {
        name: "ASCALON BOT",
        icon_url: "https://i.imgur.com/r1T3PbX.png"
      },
      title: `${message}`,
      timestamp: new Date(),
      footer: {
        icon_url: "https://i.imgur.com/318H4Xw.png",
        text: "© Created by Zayn#0607"
      }
    }
  });
  }
}
