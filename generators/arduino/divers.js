goog.provide('Blockly.Blocks.divers');

goog.require('Blockly.Blocks');


Blockly.Arduino['base_delayms'] = function(block) {
  var delay_time = Blockly.Arduino.valueToCode(block, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '1000';
  var code = 'delay(' + delay_time + ');\n';
  return code;
};

Blockly.Arduino['grove_temporature_sensor'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN');
  /*
	a=analogRead(0);
	  resistance=(float)(1023-a)*10000/a;
	  temperature=1/(log(resistance/10000)/B+1/298.15)-273.15;
  */
  var code = 'round('+'(1/(log((float)(1023-analogRead('+dropdown_pin+'))*10000/analogRead('+dropdown_pin+'))/10000)/3975+1/298.15)-273.15'+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['grove_ultrasonic_ranger'] = function(block) {
    var PIN_TRIG = this.getFieldValue('PIN_TRIG'); 
    var PIN_ECHO = this.getFieldValue('PIN_ECHO');
    Blockly.Arduino.setups_['setup_output_'+PIN_TRIG] = 'pinMode('+PIN_TRIG+', OUTPUT);';
    Blockly.Arduino.setups_['setup_input_'+PIN_ECHO] = 'pinMode('+PIN_ECHO+', INPUT);';
    Blockly.Arduino.definitions_['var_ultrasonic'+PIN_TRIG] = 'long ultrason_'+PIN_TRIG+ '() {\n'+
        '   long duration, distance;\n'+
        '   digitalWrite('+PIN_TRIG+',LOW);\n'+
        '   delayMicroseconds(2);\n'+
        '   digitalWrite('+PIN_TRIG+', HIGH);'+
        '   delayMicroseconds(10);\n'+
        '   digitalWrite('+PIN_TRIG+', LOW);\n'+
        '   duration = pulseIn('+ PIN_ECHO +', HIGH);\n'+
        '   distance = duration * 340 / (2 * 10000);\n'+
        '   return distance;\n'+
        '}\n';;
    var code;
    code = 'ultrason_'+PIN_TRIG+'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['grove_motor_shield'] = function(block) {
  var dropdown_direction = this.getFieldValue('DIRECTION');
  var speed = 127;//Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '127';
  Blockly.Arduino.setups_["setup_motor"] = "pinMode(8,OUTPUT);//I1\n"+
  "  pinMode(11,OUTPUT);//I2\n"+
  "  pinMode(9,OUTPUT);//speedPinA\n"+
  "  pinMode(12,OUTPUT);//I3\n"+
  "  pinMode(13,OUTPUT);//i4\n"+
  "  pinMode(10,OUTPUT);//speedPinB\n";
  var code = "";
  if(dropdown_direction==="forward"){
    Blockly.Arduino.definitions_['define_forward'] = "void forward()\n"+
"{\n"+
     "  analogWrite(9,"+speed+");//input a simulation value to set the speed\n"+
     "  analogWrite(10,"+speed+");\n"+
     "  digitalWrite(13,HIGH);//turn DC Motor B move clockwise\n"+
     "  digitalWrite(12,LOW);\n"+
     "  digitalWrite(11,LOW);//turn DC Motor A move anticlockwise\n"+
     "  digitalWrite(8,HIGH);\n"+
"}\n";
    code="forward();\n";
  } else if (dropdown_direction==="left") {
    Blockly.Arduino.definitions_['define_right'] = "void right()\n"+
"{\n"+
     "  analogWrite(9,"+speed+");//input a simulation value to set the speed\n"+
     "  analogWrite(10,"+speed+");\n"+
     "  digitalWrite(13,LOW);//turn DC Motor B move anticlockwise\n"+
     "  digitalWrite(12,HIGH);\n"+
     "  digitalWrite(11,LOW);//turn DC Motor A move anticlockwise\n"+
     "  digitalWrite(8,HIGH);\n"+
"}\n\n";
    code="right();\n";
  } else if (dropdown_direction==="right") {
    Blockly.Arduino.definitions_['define_left'] = "void left()\n"+
"{\n"+
     "  analogWrite(9,"+speed+");//input a simulation value to set the speed\n"+
     "  analogWrite(10,"+speed+");\n"+
     "  digitalWrite(13,HIGH);//turn DC Motor B move clockwise\n"+
     "  digitalWrite(12,LOW);\n"+
     "  digitalWrite(11,HIGH);//turn DC Motor A move clockwise\n"+
     "  digitalWrite(8,LOW);\n"+
"}\n\n";
    code="left();\n";
  } else if (dropdown_direction==="backward"){
    Blockly.Arduino.definitions_['define_backward'] = "void backward()\n"+
"{\n"+
     "  analogWrite(9,"+speed+");//input a simulation value to set the speed\n"+
     "  analogWrite(10,"+speed+");\n"+
     "  digitalWrite(13,LOW);//turn DC Motor B move anticlockwise\n"+
     "  digitalWrite(12,HIGH);\n"+
     "  digitalWrite(11,HIGH);//turn DC Motor A move clockwise\n"+
     "  digitalWrite(8,LOW);\n"+
"}\n\n";
    code="backward();\n";
  } else if (dropdown_direction==="stop"){
    Blockly.Arduino.definitions_['define_stop'] = "void stop()\n"+
"{\n"+
     "digitalWrite(9,LOW);// Unenble the pin, to stop the motor. this should be done to avid damaging the motor.\n"+
     "digitalWrite(10,LOW);\n"+
     "digitalWrite(11,LOW);\n"+
     "digitalWrite(12,LOW);\n"+
     "digitalWrite(13,LOW);\n"+
     "delay(1000);\n"+
"}\n\n";
    code="stop();\n";
  }
  return code;
};


Blockly.Arduino['millis2'] = function(block) {
  var code = 'millis()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['millis'] = function(block) {
  var dropdown_unit = block.getFieldValue('unit');
  
  var code;
  
  if (dropdown_unit=='ms') {
    code = 'millis()';
  }
  
  if (dropdown_unit=='se') {
      code = 'millis()/1000';
  }
  
   if (dropdown_unit=='mn') {
      code = 'millis()/60000';
  }
  // TODO: Assemble JavaScript into code variable.
  
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['var_random'] = function(block) {
  var value_rand_min = Blockly.Arduino.valueToCode(this, 'rand_min', Blockly.Arduino.ORDER_ATOMIC);
  var value_rand_max = Blockly.Arduino.valueToCode(this, 'rand_max', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'random('+value_rand_min+','+value_rand_max+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};


Blockly.Arduino['various_constrain'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(this, 'x', Blockly.Arduino.ORDER_ATOMIC);
  var value_a = Blockly.Arduino.valueToCode(this, 'a', Blockly.Arduino.ORDER_ATOMIC);
  var value_b = Blockly.Arduino.valueToCode(this, 'b', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'constrain('+value_x+','+value_a+','+value_b+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['various_tone2param'] = function(block) {
  var value_freq = Blockly.Arduino.valueToCode(block, 'freq', Blockly.Arduino.ORDER_ATOMIC);
  var pin = this.getFieldValue('PIN'); 
  // TODO: Assemble JavaScript into code variable.
  var code = 'tone('+pin+', '+value_freq+');\n';
  return code;
};

Blockly.Arduino['various_tone3param'] = function(block) {
  var value_freq = Blockly.Arduino.valueToCode(block, 'freq', Blockly.Arduino.ORDER_ATOMIC);
  var pin = this.getFieldValue('PIN'); 
  var value_duration = Blockly.Arduino.valueToCode(block, 'duration', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'tone('+pin+', '+value_freq+' , '+value_duration+');\n';
  return code;
};

Blockly.Arduino['various_notone'] = function(block) {
      var pin = this.getFieldValue('PIN'); 
  // TODO: Assemble JavaScript into code variable.
  var code = 'noTone('+pin+');\n';
  return code;
};

Blockly.Arduino['s4a_broadcastmessage'] = function(block) {
  var value_ip = Blockly.Arduino.valueToCode(block, 'server_ip', Blockly.Arduino.ORDER_ATOMIC);
  var value_message = Blockly.Arduino.valueToCode(block, 'server_message', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  
  // TODO: Assemble Arduino into code variable.
  //ADEL http://192.168.1.2/MESSAGE
    var varName = "httpurl";
    Blockly.Arduino.definitions_['variables'+varName] = 'String  ' + varName + ';' ;//TEST ADEL
    
    Blockly.Arduino.definitions_['define_ESP'] = '#include <ESP8266WiFi.h>\n';
    Blockly.Arduino.definitions_['define_ESPHTTPClient'] = '#include <ESP8266HTTPClient.h>\n';

    //Blockly.Arduino.declarehttp_['httpc']='HTTPClient http;\n';
    Blockly.Arduino.definitions_['httpc'] = 'HTTPClient http;\n';


  var code = '';
    code+='httpurl = "http://";\n';
    code+='httpurl+='+value_ip+';\n';
    code+='httpurl+=":42001/broadcast=";\n';
    code+='httpurl+='+value_message+';\n';
    code+='http.begin(httpurl);\n';
    code +=  'http.GET();\n';
    code +=  'http.end();\n';
  
  return code;
};

Blockly.Arduino['s4a_updatevar'] = function(block) {
  var value_ip = Blockly.Arduino.valueToCode(block, 'server_ip', Blockly.Arduino.ORDER_ATOMIC);
  var value_var_name = Blockly.Arduino.valueToCode(block, 'var_name', Blockly.Arduino.ORDER_ATOMIC);
  var value_var_value = Blockly.Arduino.valueToCode(block, 'var_value', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  
  // TODO: Assemble Arduino into code variable.
  //ADEL http://192.168.1.2/MESSAGE
    var varName = "httpurl";
    Blockly.Arduino.definitions_['variables'+varName] = 'String  ' + varName + ';' ;//TEST ADEL
    
    Blockly.Arduino.definitions_['define_ESP'] = '#include <ESP8266WiFi.h>\n';
    Blockly.Arduino.definitions_['define_ESPHTTPClient'] = '#include <ESP8266HTTPClient.h>\n';

    //Blockly.Arduino.declarehttp_['httpc']='HTTPClient http;\n';
    Blockly.Arduino.definitions_['httpc'] = 'HTTPClient http;\n';


  var code = '';
    code+='httpurl = "http://";\n';
    code+='httpurl+='+value_ip+';\n';
    code+='httpurl+=":42001/vars-update=";\n';
    code+='httpurl+='+value_var_name+';\n';
    code+='httpurl+="=";\n';
    code+='httpurl+='+value_var_value+';\n';
    code+='http.begin(httpurl);\n';
    code +=  'http.GET();\n';
    code +=  'http.end();\n';
  
  return code;
};

Blockly.Arduino['s4a_listenedmessage'] = function(block) {
  var value_ip = Blockly.Arduino.valueToCode(block, 'server_ip', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
    //OLD PART
    var varName = "httpurl";
    Blockly.Arduino.definitions_['variables'+varName] = 'String  ' + varName + ';' ;//TEST ADEL
    Blockly.Arduino.definitions_['variables_TheHiddenAnswerOfClient'] = 'String  TheHiddenAnswerOfClient;' ;//TEST ADEL
    
    Blockly.Arduino.definitions_['define_ESP'] = '#include <ESP8266WiFi.h>\n';
    Blockly.Arduino.definitions_['define_ESPHTTPClient'] = '#include <ESP8266HTTPClient.h>\n';

    //Blockly.Arduino.declarehttp_['httpc']='HTTPClient http;\n';
    Blockly.Arduino.definitions_['httpc'] = 'HTTPClient http;\n';
  
  //LA FONCTION
  Blockly.Arduino.definitions_['fonc_SendWithAnswer'] = 'String SendWithAnswerS4A(String IPcache) {\n'+
          'httpurl = "http://";\n'+
          'httpurl+=IPcache;\n'+
          'httpurl+=":42001/send-messages";\n'+
          'http.begin(httpurl);\n'+
          'http.GET();\n'+
          'TheHiddenAnswerOfClient = (http.getString());\n'+
          'http.end();\n'+
          'return TheHiddenAnswerOfClient;\n}\n';
  
  var code = 'SendWithAnswerS4A('+value_ip+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};


Blockly.Arduino['various_dht_temperature_sensor'] = function(block) {
  var dropdown_sensor_type = block.getFieldValue('sensor_type');
  var dropdown_unity = block.getFieldValue('unity');
  var pin = this.getFieldValue('PIN'); 
  
  Blockly.Arduino.definitions_['define_DHT'] = '#include "DHT.h"\n';
  
  Blockly.Arduino.definitions_['define_DHTPIN_'+pin] = 'DHT dht'+pin+'('+pin+','+dropdown_sensor_type+');\n';
  
  
  //DHT dht(DHTPIN, DHTTYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = 'dht'+pin+'.readTemperature('+dropdown_unity+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['various_dht_humidity_sensor'] = function(block) {
  var dropdown_sensor_type = block.getFieldValue('sensor_type');
  var dropdown_unity = block.getFieldValue('unity');
  var pin = this.getFieldValue('PIN'); 
  
  Blockly.Arduino.definitions_['define_DHT'] = '#include "DHT.h"\n';
  
  Blockly.Arduino.definitions_['define_DHTPIN_'+pin] = 'DHT dht'+pin+'('+pin+','+dropdown_sensor_type+');\n';
  
  
  //DHT dht(DHTPIN, DHTTYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = 'dht'+pin+'.readHumidity('+dropdown_unity+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};