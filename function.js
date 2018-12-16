

module.exports = {

  log: function(message) {
    const joinChannel = message.member.guild.channels.find('name', 'history-bot');
    joinChannel.send(`[LOG] ${message}`);
  }

}
