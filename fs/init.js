load('api_config.js');
load('api_gpio.js');
load('api_timer.js');
load('api_mqtt.js');


let led = 33; //Cfg.get('foo.bbq');
let topic = 'taco/tuesday';

GPIO.set_mode(led, GPIO.MODE_OUTPUT);
Timer.set(2000, Timer.REPEAT, function() {
  GPIO.toggle(led);
  let fml = JSON.stringify({ taco: "asada", burrito: "el pastor" });
  let res = MQTT.pub('taco/tuesday', fml, 1);
  print('send it: ', res ? 'yes' : 'no', res)
}, null);