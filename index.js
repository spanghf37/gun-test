const Gun = require('gun');
var http = require('http');
// Must be added after Gun but before instantiating Gun
require('./gun-influxdb');

// Instantiate Gun
var server = http.createServer();

const gun = new Gun({
    file: false,
    web: server,
    peers: ['http://192.168.1.252:8080/gun'],
    // The following are defaults. You can supply `true` to use all defaults, or overwrite the ones you choose
    influx: {
        host: 'localhost',
        port: '8086',
        database: 'gun',
        query: ''
    }
});

server.listen(8888,function(){
    console.log('Server listening on http://localhost:8880/gun');
});

function entierAleatoire(min, max)
    {
     return Math.floor(Math.random() * (max - min + 1)) + min;
    }

// Math.random().toString(36).replace('0.', '')
    
let i;
//for (i =0; i < 1000; i++){
//    gun.get(Math.random().toString(36).replace('0.', '')).put({
//    tags: '', tags_unit: 'sna2', tags_bigramme: 'BN',
//    fields: '', fields_temperature: entierAleatoire(4000, 5000)/100, fields_huile: entierAleatoire(7000, 8000)/100,
//    timestamp: Date.now()*1000000-1000000000*i,
    //measurement: 'metrics'
//})
//}
console.log("Ecriture OK");
