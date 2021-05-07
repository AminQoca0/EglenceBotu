const Discord = require("discord.js");

exports.run = async (client, message, args) => {
 
 const rixnux = new Discord.MessageEmbed()

.setColor("RED")
.setImage("https://media1.tenor.com/images/0c05631335594254143fb8beb56c7817/tenor.gif?itemid=11558347")
.setTitle("Efsane bir gol attın !");

  message.channel.send(rixnux);
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "gol",
  description: "Gol gif atarsın",
  usage: "gol"
};
//Rixnux Code
