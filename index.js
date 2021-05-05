const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Zalogowano jako ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('ODM5NTU2NjYzNDA0OTIwODcz.YJLYEg.3Ke3sDM8sGTJL5fNiAMbVvy3WQA');