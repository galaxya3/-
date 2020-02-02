const Discord =require('discord.js');
const bot =new Discord.Client();

const token='NjcyMDkzMDQ1MDEyODI0MDk0.XjGrTA.OX-mP4OoBzxn4c3PTgruT3OExlE';

bot.on('ready',()=>{
    console.log('this bot is online');
})

bot.on('message',msg=>{
   if(msg.content === "HELLO"){
       msg.reply('HELLO ELLU!');
   }
})

bot.login(token);(process.env.BOT_TOKEN)
