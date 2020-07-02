const config = require("./config.json");
const Commando = require('discord.js-commando');

const client = new Commando.Client({
    owner: '288782447704014861'
});

client.on("ready", () => {
    console.log("PEEPEE!");
});


client.login(config.token);
