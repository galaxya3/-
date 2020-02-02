const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NjczNTUyMzk0ODA5OTAxMDg2.Xjb1CQ.Xms7j6xutr9IC7U8p-zHY6-6Qs8');