const Gun = require('gun');

// Must be added after Gun but before instantiating Gun
require('./gun-influxdb');

// Instantiate Gun
const gun = new Gun({
    file: 'data.json',
    //web: httpServer,
    peers: ['192.168.1.252:8765'],
    // The following are defaults. You can supply `true` to use all defaults, or overwrite the ones you choose
    influx: {
        host: 'localhost',
        port: '8086',
        database: 'gun',
        query: ''
    }
});

function entierAleatoire(min, max)
    {
     return Math.floor(Math.random() * (max - min + 1)) + min;
    }

// Math.random().toString(36).replace('0.', '')
    
let i;
for (i =0; i < 1000; i++){
    gun.get(Math.random().toString(36).replace('0.', '')).put({
    tags: '', tags_unit: 'sna2', tags_bigramme: 'BN',
    fields: '', fields_temperature: entierAleatoire(4000, 5000)/100, fields_huile: entierAleatoire(7000, 8000)/100,
    timestamp: Date.now()*1000000-1000000000*i,
    //measurement: 'metrics'
})
}
console.log("Ecriture OK");
