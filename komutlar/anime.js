const Discord = require('discord.js');
const client = new Discord.Client()
const randomanime = require('random-anime')
exports.run = async (client, rixnux, args) => {
    const anime = randomanime.anime();
    rixnux.channel.send(anime);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'anime'
};
