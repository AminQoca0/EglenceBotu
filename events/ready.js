const moment = require('moment');
const Discord = require('discord.js');
const cfg = require("../ayarlar.json");
module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setPresence({ activity: { name: "Rixnux Code • Amin Qoca" }, status: "online" });
};
