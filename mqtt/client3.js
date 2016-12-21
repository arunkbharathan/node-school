mqtt = require('mqtt');
var client = mqtt.createClient({
  clientId: "moscaslides",
  clean: false
});

client.on("message", function(topic, payload) {
  console.log([topic, payload.toString()].join(": "));
  
  setTimeout(client.end.bind(client), 1000);
});