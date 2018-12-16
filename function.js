

module.exports = {

  log: function(message, channel) {
    const joinChannel = channel.member.guild.channels.find('name', 'history-bot');
    joinChannel.send(`[LOG] ${message}`);
  }

}
