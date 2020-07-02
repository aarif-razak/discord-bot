const config = require("./config.json");
const Commando = require('discord.js-commando');

const path = require('path');



const client = new Commando.Client({
    owner: '288782447704014861'
});

client.on("ready", () => {
    console.log("PEEPEE!");
});

client.registry
    .registerGroups([
        ['first', 'Testing stuff'],
    ])
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, 'commands'));
    

client.login(config.token);
