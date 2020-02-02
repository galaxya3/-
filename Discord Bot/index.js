const Discord =require('discord.js');
const bot =new Discord.Client();

const token= 'NjczNTUyMzk0ODA5OTAxMDg2.Xjbssg.cL2pzw_c9L4ws0fS_uxN6tshOXw'
bot.on('ready',()=>{
    console.log('this bot is online');
})

bot.on('message',msg=>{
   if(msg.content === "HELLO"){
       msg.reply('HELLO ELLU!');
   }
})
  


bot.login(token);

