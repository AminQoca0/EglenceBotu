const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'Rixnux Code') {
    msg.reply('♥');
  }
});
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
if (err) console.error(err);
console.log(`${files.length} komut yüklenecek.`);

client.login('procces.env.TOKEN');
//Rixnux Code
