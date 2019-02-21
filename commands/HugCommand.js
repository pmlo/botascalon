const Discord = require("discord.js");
const re = require('request-promise-native');

module.exports.run = async (bot, message, args, ops) => {

    let options = {
        url: 'http://api.giphy.com/v1/gifs/search',
        qs: {
          q: 'hug',
          api_key: 'dc6zaTOxFJmzC',
          limit: 10,
          offset: 0
        },
        json: true
      };
    
      let response = re(options);
    
      if (!response.data.length) return;
      
    
    message.channel.send({
        embed: {
          color: 0x315,
          title: `A hug from ${message.author.tag}`,
          image: {
            url: response.data[Math.floor(Math.random() * response.data.length)].images.original.url
          },
          footer: {
            text: 'Powered by GIPHY'
          }
        }
      });
}

module.exports.help = {
    name: "hug"
  }
