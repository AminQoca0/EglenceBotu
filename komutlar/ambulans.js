const Discord = require ("discord.js")

exports.run = async (client, message, args) => {
  
  const anan = new Discord.MessageEmbed()
  .setTitle("Ambulans Geliyor Sabret!!")
  .setColor('#d60c0c')
  .setImage("https://thumbs.gfycat.com/AgonizingQualifiedIzuthrush-max-1mb.gif")
  message.channel.send(anan)


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["112", "ara112"]
};

exports.help = {
  name: "ambulans"
 
};  
