const Discord = require("discord.js");
module.exports.run = async (bot, message, args, ops, tools) => {

  message.delete();

  let arg = message.content.split(" ").slice(1);
  let messages = arg.join(" ");

    if(ops.soloTournoi.has(`${messages}`)) {
      ops.soloTournoi.delete(`${messages}`);
    }
    return;
}

module.exports.help = {
  name: "removesolo"
}
