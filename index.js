const Gun = require('gun');

// Must be added after Gun but before instantiating Gun
require('./gun-influxdb');
// require('./gun-mongo');
//require('gun/lib/time.js');

// Instantiate Gun
const gun = new Gun({
    file: false,
    //web: httpServer,

    // The following are defaults. You can supply `true` to use all defaults, or overwrite the ones you choose
    influx: {
        host: 'localhost',
        port: '8086',
        database: 'gun',
        //collection: 'gun-mongo',
        query: ''
    }
});

//var test = gun.get(Math.random().toString(36).replace('0.', '')).put({
var test = gun.get('byr16sssszzzssss01vvddstt12').put({
    tags: {gun_node_type: 'tags', unit: 'sna1', bigramme: 'AG',gun_main_key: 'byr16sssszzzssss01vvddstt12', timestamp: 1537902090013858742},
    fields: {gun_node_type: 'fields', temperature: 81, huile: 20, gun_main_key: 'byr16sssszzzssss01vvddstt12', timestamp: 1537902090013858742},
    timestamp: 1537902090013858742,
    gun_node_type: 'main'
    //measurement: 'metrics'
})
    //tis: new Date()

//console.log(test);
// create amber
//var compressor = gun.get('compresseur').get('timestamp').get(Date.now())
//put({
//  fields: {
//      temperature_huile: 24.5,
//      temperature_eau: 70.3
//  },
//  tags: {
//      bigramme: 'AF',
//      installation: 'comp_ba_12',
//      platforme: 'ptf1'
//  }
//})
