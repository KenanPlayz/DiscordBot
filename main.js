/*const Discord =require('discord.js');

const client = new Discord.Client();*/
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.once('ready', ()=> {
    console.log('COYOTE is online!');
});

client.login('<token>');