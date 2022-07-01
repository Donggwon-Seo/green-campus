const mqtt = require('mqtt');
const Client = require('node-rest-client').Client;
const client = new Client();

var args = {
    data: {},
    headers: {"Content-Type": "application/json"}
};

const sub_client = mqtt.connect('mqtt://broker.hivemq.com');
//test 토픽 구독
sub_client.subscribe("green-campus/sensors");

sub_client.on('message', function (topic, message) {
    args.data = message.toString('utf-8');
    console.log(message.toString('utf-8'));
    client.post("http://[서버 IP]:8080/api/sensor", args, function (data, response) {

    });
    console.log("토픽:" + topic, "메세지:" + message)
});

