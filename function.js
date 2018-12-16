

module.exports = {

  log: function(message, messsages) {
    const joinChannel = messsages.member.guild.channels.find('name', 'history-bot');
    joinChannel.send(`[LOG] ${message}`);
  }

}
