const Discord =require('discord.js');
const bot =new Discord.Client();

const token= 'NjczNTUyMzk0ODA5OTAxMDg2.XjcPBQ.OfIF7ufxlVANcajj0VWaFYpza-Q'
bot.on('ready',()=>{
    console.log('this bot is online');
})

bot.on('message',msg=>{
   if(msg.content === "HELLO"){
       msg.reply('HELLO ELLU!');
   }
})

bot.login(token);

