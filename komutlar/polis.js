const Discord = require ("discord.js")

exports.run = async (client, message, args) => {
  
  
  const rixnux = new Discord.MessageEmbed()
  .setTitle("Polis Geliyor, Kaç!!! keşke çalıntı arabayla gelmeseydik yazık oldu bize")
  .setColor('#0c54b8')
  .setImage("https://64.media.tumblr.com/tumblr_lybamvmkrs1qfjjglo1_250.gif")
  message.channel.send(rixnux)
  
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["155", "ara155"],
  permLevel: 0
};

exports.help = {
  name: "polis",
  description: "Polis Geliyor",
  usage: "r!polis"
};  
