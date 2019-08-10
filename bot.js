const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Marcelo");


client.on("ready", () => {
let channel =     client.channels.get("605362902056173621")
setInterval(function() {
channel.send(`MARCELO`);
}, 30)
})

client.login(process.env.BOT_TOKEN);