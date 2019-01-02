const Discord = require("discord.js");
module.exports.run = async (bot, message, args, ops, tools) => {

  message.delete();

  let arg = message.content.split(" ").slice(1);
  let messages = arg.join(" ");

    if(ops.soloBuildFightTournoi.has(`${messages}`)) {
      ops.soloBuildFightTournoi.delete(`${messages}`);
    }
    return;
}

module.exports.help = {
  name: "removesolobf"
}
