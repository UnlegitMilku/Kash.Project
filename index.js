const {Client, Intents} = require('discord.js');
const bot = new Client({intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"]});
const keepAlive = require("./server");


bot.login(YOUR TOKEN HERE);

bot.on('message', message => {
  if (message.author.bot) return;
})

const bannedwords = ["banned", "words", "here"];

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


let remindersChannel = "953251365751250955"
global.avatarURL = bot.avatarURL;

const botStatusContent = ["set your status here"];

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
  bot.channels.cache.get('953597561485291520').send(`Logged in as ${bot.user.tag} at ` + (time));

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
  if (message.content === '+osu') {  
    message.channel.send(`no, quit that game immediately`);
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
    message.channel.send(`silence please`);
    console.log('@everyone was used in...');
  }
});

bot.on('message', message => {
  if (message.content === '@mods i use aqn') { 
    message.member.roles.add("953611174572883968");
    message.channel.send(`You cannot talk for another 5120 minute(s).`);
    console.log('...has been muted');
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
