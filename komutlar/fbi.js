const Discord = require("discord.js");

exports.run = async (client, message, args) => {
 
 const amin =  new Discord.MessageEmbed()

.setColor("BLUE")
.setImage("https://media.tenor.com/images/1c084de471ca959b4bcc7763e42fb3ea/tenor.gif")
.setTitle("FBI Geldi Kaç!");

  message.channel.send(amin);
}; 
//Rixnux Code
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "fbi",
  description: "FBi gif atar",
  usage: "fbi"
};
