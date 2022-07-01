
//node.js에서 mqtt를 다룰 때 사용되는 메소드들을 정리합니다.

const mqtt = require('mqtt'); //모듈 불러오기

const client = mqtt.connect(url, options); //연결하기

const options = {
    host: '127.0.0.1',
    port: 8883,
    protocol: 'mqtts',
    username:"steve",
    password:"password",
};

const client = mqtt.connect(options);

client.on("connect", () => {
    console.log("connected"+ client.connected);
});

client.end(); //connected를 사용시 계쏙 연결 상태이므로 종료

client.on("error",function(error){
    console.log("Can't connect" + error);
    process.exit(1)});

//메시지 Publish
client.publish(topic, message, [options], [callback])

//Topic subscribe
const topic_s="topic";
client.subscribe(topic_s);

//구독 했으니 메시지 받기
client.on('message', (topic, message, packet) => {
    console.log("message is "+ message);
    console.log("topic is "+ topic);
});

