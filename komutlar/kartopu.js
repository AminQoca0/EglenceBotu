
const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let kartopu = args.slice(0).join(' ');
        if (kartopu.length < 1) {
        return message.reply('Kime kartopu atmak isterin  etiketle!');
            } else {
              message.channel.send('<=====     ❄️')
              .then(amin => amin.edit('<=====    ❄️'))
.then(amin => amin.edit('<====    ❄️'))
              .then(amin => amin.edit('<====    ❄️'))
.then(amin => amin.edit('<===   ❄️'))
              .then(amin => amin.edit('<===   ❄️'))
.then(amin => amin.edit('<==  ❄️'))
              .then(amin => amin.edit('<==  ❄️'))
.then(amin => amin.edit('<= ❄️'))
              .then(nmsg => nmsg.edit('<= ❄️'))
.then(amin => amin.edit('❄️'))
              .then(amin => nmsg.edit('❄️'))
.then(amin => amin.edit(`${kartopu} artık ⛄ oldu.`));

       
      }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kar-topu']
};
// Çalanı Sikkkkeriz
exports.help = {
  name: 'kartopu'
}; 
//Amin Qoca
