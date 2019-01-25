const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops, tools) => {

  const filter = (reaction, user) => ['one', 'two','three',
'four'].includes(reaction.emoji.name) && user.id == message.author.id;

const embed = new RichEmbed()
.setTitle('Tournois')
.setDescription(`

one (solo)
two (solo buildfight)
three (solo turtle fight)
four (duo)

  `)
  .setColor(0xdd9323)
  .setFooter(`ID : ${message.author.id}`);

  message.channel.send(embed).then(msg => {

    msg.react('one');
    msg.react('two');
    msg.react('three');
    mdg.react('four');

    msg.awaitReaction(filter,{
      max: 1,
      time: 30000,
      errors: ['time']
    }).then(collected => {
      const reaction = collected.first();

      switch (reaction.emoji.name) {
        case 'one':
        message.channel.awaitMessage(filter, {
          max: 1,
          time: 10000
        }).then(collected => {
          var sizeMax = args[0];
          bot.numbersolomax = sizeMax;
          tools.setsolo(sizeMax, bot);
        }).catch(err -> {
          console.log(err);

        break;
      }
    });
    });

}

module.exports.help = {
  name: "tournoismanager"
}
