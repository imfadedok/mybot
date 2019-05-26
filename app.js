const { Client } = require('klasa');

new Client({
    clientOptions: {
        fetchAllMembers: false
    },
    prefix: 'i.',
    cmdEditing: true,
    typing: true,
    readyMessage: (client) => `${client.user.tag}, Ready to serve ${client.guilds.size} guilds and ${client.users.size} users`
}).login('NTgyMjQ3MTkyMDAyMjk3ODU2.XOrCAg.mkGDXTZHRWsnLs5N5czcyG1yVHo')

//
