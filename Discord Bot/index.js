const Discord =require('discord.js');
const bot =new Discord.Client();

const token= 'NjczNTUyMzk0ODA5OTAxMDg2.XjcLCA.wDDjWId819KsPWqEdSMkbpdK4cE'
bot.on('ready',()=>{
    console.log('this bot is online');
})

bot.on('message',msg=>{
   if(msg.content === "HELLO"){
       msg.reply('HELLO ELLU!');
   }
})

bot.login(token);

