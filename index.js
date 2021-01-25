const RPC = require('discord-rpc');
const client = new RPC.Client({ transport: 'ipc' });
client.on('ready', () =>
{
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            assets: {
                large_image: 'jsu'
            },
            details: 'Learning JavaScript',
            buttons: [
                { label: 'Join Me!', url: 'https://discord.gg/gRxgAWA' }
            ]
        }
    });
    console.log('started!');
});
client.login({ clientId: '777146258888327188' });
