const Influx = require('influx');
const os = require('os');

const influx = new Influx.InfluxDB({
 host: 'localhost',
 database: 'memory_used_db',
 schema: [
   {
     measurement: 'memory_used_percent',
     fields: {
       device: Influx.FieldType.STRING,
       mem_used_percent: Influx.FieldType.INTEGER
     },
     tags: [
       'host'
     ]
   }
 ]
});

var sendData = function(){
influx.writePoints([
  {
    measurement: 'memory_used_percent',
    tags: { host: "Arun" },
    fields: { device:os.hostname(), mem_used_percent: (os.totalmem() - os.freemem())/os.totalmem()*100 },
  }
]).catch(err => {
      console.error(`Error saving data to InfluxDB! ${err}`)
    })
};

setInterval(sendData, 5000);