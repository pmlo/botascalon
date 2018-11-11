const Discord = require("discord.js");
var client = new Discord.Client();
const token = process.env.token;

client.on('ready', function() {
    console.log("bot connecter")
});

client.login(token);
