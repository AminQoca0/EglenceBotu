const Discord = reqiure("discord.js")

exports.run = aysnc(client, message, args) => {


///https://i.makeagif.com/media/2-22-2015/TSaTVn.gif     GIF YEDEGI

const sa =  new Discord.MessageEmbed()

.setColor("BLUE")
.setImage("https://i.makeagif.com/media/2-22-2015/TSaTVn.gif")
.setTitle("Ucus Basliyor!");

  message.channel.send(sa);

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "uc"
};
