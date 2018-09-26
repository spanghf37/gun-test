const Influx = require('influx');

const influx = new Influx.InfluxDB('http://localhost:8086/gun');

influx.getDatabaseNames()
  .then(names => {
    if (!names.includes('gun')) {
      return influx.createDatabase('gun');
    }
  })
  //.then(() => {
  //  influx.listen(influx.get('port'), () => {
  //    console.log(`Listening on ${app.get('port')}.`);
  //  });
    //writeDataToInflux(hanalei);
    //writeDataToInflux(hilo);
    //writeDataToInflux(honolulu);
    //writeDataToInflux(kahului);
  //})
  .catch(error => console.log({ error }));

  influx.writeMeasurement('metrics', [
    /*{
      tags: { unit: 'sna1', bigramme: 'AG', type: 'compresseur', installation: 'CMP1BD', element: 'huile' },
      fields: { keyuuid: "jm1212123234", temperature: 10.1, pression: 57.1 },
      timestamp: new Date()
    }*/
    {
      tags: {gun_main_key: "jm12121313414"},
      fields: {gun_main_node: "gunobject"}
    }
  ], {
    database: 'gun'
  }).catch(err => {
    console.error(`Error saving data to InfluxDB! ${err.stack}`)
  })
  const key = "jm1212123234";
//influx.query('SELECT * FROM "metrics" WHERE "keyuuid" = \'jm1212123233\'').then(results => {
  influx.query(`SELECT * FROM "metrics" WHERE "keyuuid" = \'${key}\'`).then(results => {
    console.log(results);
});
