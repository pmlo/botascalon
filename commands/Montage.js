const Discord = require("discord.js");


module.exports.run = async (bot, message, args, ops, tools) => {
  message.author.send("Bonjour !\n \nVotre message dans le channel #💀recrutement-team ne respecte pas le modèle donné \n \n Nous t'invitons à respecter le modèle ci-dessous lors de votre prochain post\n \n __Voici le formulaire à respecter pour publier son annonce : __ \n \n ```Nom de l'équipe (avec brève description mais facultatif) :\nPlateforme :\nÂge minimum (indiquer l'âge minimum si nécessaire) :\nRôles disponibles (joueur, coach, modérateur, manager,etc...) :\nObjectif (snipe, tournoi, fun, ...) :\nK/D minimum (indiquer le K/D minimum si nécessaire) :```\n \nÂ bientôt !");

}

module.exports.help = {
  name: "montage"
}
