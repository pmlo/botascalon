const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args, ops) => {

    message.delete();

    let kickchanneltest = message.guild.channels.find(`name`, "modération");
    if(!kickchanneltest) return;

    let {body} = await superagent
    .get('https://random.dog/woof.json');

    let dogembed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setTitle("Do")
    .setImage(body.url)

    message.channel.send(dogembed);

    

}
 
module.exports.help = {
  name: "dog"
}