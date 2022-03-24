const {Client, Intents} = require('discord.js');
const bot = new Client({intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"]});
const keepAlive = require("./server");


bot.login(process.env.BOT_TOKEN);

bot.on('message', message => {
  if (message.author.bot) return;
})

const bannedwords = ["banned word 1","banned word 2"];

bot.on('message', message => {
  bannedwords.forEach((word ) => {
     if(message.content.includes(word)) {  
       message.delete();
       message.channel.send(`no`);
      console.log('p');
       return;
    }
  })
});


let remindersChannel = "id of reminder channel"
global.avatarURL = bot.avatarURL;

const botStatusContent = ["status you want","status you want 2"];

bot.on('reconnecting', () => {
    console.log("Bot timed out! reconnecting..");
});

bot.on('disconnect', (event) => {
    console.log("Bot disconnected! Error Code: " + event.code);
});

var todayDay = new Date();
var time = todayDay.getHours() + ":" + todayDay.getMinutes() + ":" + todayDay.getSeconds();

bot.on('ready', () => {
    console.log(`==================================`)
    console.log(`Logged in as ${bot.user.tag}!`);
    bot.user.setStatus("online"); console.log(`==================================`)
  bot.channels.cache.get('id of channel where you want to send the message').send(`Logged in as ${bot.user.tag} at ` + (time));

    setInterval(() => {
        let status = botStatusContent[Math.floor(Math.random() * botStatusContent.length)];
        bot.user.setActivity(status);
    }, 10000);
});


bot.on('message', message => {
  if (message.content === '+ping') {  
    message.channel.send(`Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ws.ping)}ms`);
  }
});

bot.on('message', message => {
  if (message.content === 'beep') {  
    message.channel.send(`boop`);
  }
});
bot.on('message', message => {
  if (message.content === 'boop') {  
    message.channel.send(`beep`);
  }
});

bot.on('message', message => {
  if (message.content === '@everyone') {  
    message.delete();
    message.member.roles.add("id of mute role");
    message.channel.send(`silence please`);
    console.log('@everyone was used in...');
  }
});

const ratiowords = ['ratio','skill issue'];

bot.on('message', message => {
  ratiowords.forEach((ratio ) => {
     if(message.content.includes(ratio)) {  
       message.channel.send(`Good argument, unfortunately 192.168.71.1`);
       console.log('B');
       return;
    }
  });
});

const wysiwords = ['wysi','727'];

bot.on('message', message => {
  if (message.author.bot) return;
    wysiwords.forEach((wysi ) => {
      if(message.content.includes(wysi)) {
        message.channel.send('wysi');
        return;
      }
    })
  });

bot.on('message', message => {
        if (message.author.bot) return;
        if (message.content.includes('discord.gg/') || message.content.includes('discordapp.com/invite/')) {
  
            message.delete();
            message.channel.send(`Invites are not allowed!`);
            console.log(
                "Deleted message from: " +
                message.author.username +
                message.author +
                " reason: Link!"
            );
         }
    });

/*bot.on('message', message => {
if (message.author.bot) return;
        if (message.content.toLowerCase().includes("https://")) {
  
            message.delete();
            message.channel.send(`Links are not allowed!`);
            console.log(
                "Deleted message from: " +
                message.author.username +
                message.author +
                " reason: Link!"
            );
         }
      } );*/
keepAlive();
