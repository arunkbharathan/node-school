var mqtt = require('mqtt');
var url = require('url');
var mqtt_url = url.parse('mqtt://localhost:1883');
var url = "mqtt://" + mqtt_url.host;
options = {
	clientId:'A2',
	clean:false,
	will:{
		topic:'A2',
		payload:'gone',
		qos:2,
		retain:true
	}
}
var client  = mqtt.connect(url,options)
 
client.on('connect', function () {
  client.subscribe('A1',{qos:2})
  client.publish('A2', 'Hello A1',{qos:2,retain:true})
})
 
client.on('message', function (topic, message) {
  // message is Buffer 
  console.log(message.toString())
  client.end()
})