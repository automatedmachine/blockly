goog.provide('Blockly.Blocks.inout');

goog.require('Blockly.Blocks');


Blockly.Arduino['iots_connectnetwork_pass'] = function(block) {
  var value_ssid = Blockly.Arduino.valueToCode(block, 'ssid', Blockly.Arduino.ORDER_ATOMIC);
  var value_password = Blockly.Arduino.valueToCode(block, 'password', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  
    Blockly.Arduino.definitions_['define_ESP'] = '#include <ESP8266WiFi.h>\n';
    
    //CODE TO GENERATE
    var code = ' WiFi.begin('+value_ssid+','+ value_password+');\n';
  return code;
};

Blockly.Arduino['iots_connectnetwork_nopass'] = function(block) {
  var value_ssid = Blockly.Arduino.valueToCode(block, 'ssid', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  
    Blockly.Arduino.definitions_['define_ESP'] = '#include <ESP8266WiFi.h>\n';
    
    //CODE TO GENERATE
    var code = ' WiFi.begin('+value_ssid+');\n';
  return code;
};

Blockly.Arduino['iots_staticip'] = function(block) {
  var text_ip = block.getFieldValue('IP');
  var text_gateway = block.getFieldValue('gateway');
  var text_masque = block.getFieldValue('masque');
  
  var res;
  res = Math.floor((Math.random() * 1000) + 1); 
  var test;
  

  res = res+"_";
  test = text_ip.lastIndexOf(","); 
  res=res+text_ip.substr(test+1,text_ip.length);
  
  
  // TODO: Assemble Arduino into code variable.
   var mdeclaration;
   mdeclaration = 'IPAddress staticIP'+res+'('+text_ip+');\n';
   mdeclaration +='IPAddress gateway'+res+'('+text_gateway+');\n';
   mdeclaration +='IPAddress subnet'+res+'('+text_masque+');\n';
   
   
      Blockly.Arduino.definitions_['IPADRESS'+res] = mdeclaration;

  //staticIP=(192,168,1,122);
//gateway=(192,168,1,9);
//subnet=(255,255,255,0);

  var code
  code = 'WiFi.config(staticIP'+res+', gateway'+res+', subnet'+res+');\n';
  return code;
};

Blockly.Arduino['iots_disconnect'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  Blockly.Arduino.definitions_['define_ESP'] = '#include <ESP8266WiFi.h>\n';
  
  var code = 'WiFi.disconnect();\n';
  return code;
};

Blockly.Arduino['iot_newclientserver'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code = 'WiFiClient client = server.available();\n';
  code += 'if (!client) { return; }\n'
  return code;
};

Blockly.Arduino['iots_reconnect'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code = 'WiFi.reconnect();\n';
  return code;
};

Blockly.Arduino['iots_isconnected'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code = 'WiFi.status() == WL_CONNECTED';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['iots_showmac'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code = 'WiFi.macAddress().c_str()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['iot_startserver'] = function(block) {
  var value_port = Blockly.Arduino.valueToCode(block, 'port', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  Blockly.Arduino.definitions_['define_port'] = 'WiFiServer server('+value_port+');\n';
  var code = 'server.begin();\n';
  return code;
};

Blockly.Arduino['iots_localip'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code = 'WiFi.localIP()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['iots_gatewayIP'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code = 'WiFi.gatewayIP().toString().c_str()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['iots_maskIP'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code = 'WiFi.subnetMask().toString().c_str()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['iot_hostname'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code = 'WiFi.hostname()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['iot_sethostname'] = function(block) {
  var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'WiFi.hostname('+value_name+') ;\n';
  return code;
};

Blockly.Arduino['iot_clientip'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code = 'client.remoteIP()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};



Blockly.Arduino['iotServer_readrequest'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code = "client.readStringUntil('\u005Cr')";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['iot_answer'] = function(block) {
  var value_iot_answer = Blockly.Arduino.valueToCode(block, 'iot_answer', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code = 'client.println("HTTP/1.1 200 OK");\n';
  code+= 'client.println("Content-Type: text/html");\n';
  code+= 'client.println("");\n';
  code+= 'client.println("<!DOCTYPE HTML>");\n';
  code+= 'client.println("<html>");\n';
  code+= 'client.println('+value_iot_answer+');\n';
  code+= 'client.println("</html>");\n';
  code+= 'client.stop();\n';
  code+= 'delay(1);\n';

  
  return code;
};



Blockly.Arduino['iot_waitconnection'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code;
  code ='WiFiClient client = server.available();\n';
  code += 'if (!client) { return; }\n';
  code += 'while(!client.available()){  delay(1); }\n';
  return code;
};

Blockly.Arduino['iot_clientflush'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code = 'client.flush();\n';
  return code;
};

Blockly.Arduino['iotap_softappass'] = function(block) {
  var value_ssid = Blockly.Arduino.valueToCode(block, 'SSID', Blockly.Arduino.ORDER_ATOMIC);
  var value_password = Blockly.Arduino.valueToCode(block, 'PASSWORD', Blockly.Arduino.ORDER_ATOMIC);
  
  var checkbox_hidden_net = block.getFieldValue('hidden(net') == 'TRUE';
  var value_channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  //
      Blockly.Arduino.definitions_['define_ESP'] = '#include <ESP8266WiFi.h>\n';
    var code = 'WiFi.softAP('+value_ssid+','+value_password+');\n';
  return code;
};

Blockly.Arduino['iotap_softapnopass'] = function(block) {
  var value_ssid = Blockly.Arduino.valueToCode(block, 'SSID', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
    Blockly.Arduino.definitions_['define_ESP'] = '#include <ESP8266WiFi.h>\n';
    var code = 'WiFi.softAP('+value_ssid+');\n';
  return code;
};

Blockly.Arduino['iotap_staticconfig'] = function(block) {
  var text_ip = block.getFieldValue('IP');
  var text_gateway = block.getFieldValue('gateway');
  var text_masque = block.getFieldValue('masque');
  // TODO: Assemble Arduino into code variable.
   var mdeclaration;
   mdeclaration = 'IPAddress staticIP('+text_ip+');\n';
   mdeclaration +='IPAddress gateway('+text_gateway+');\n';
   mdeclaration +='IPAddress subnet('+text_masque+');\n';
   
   
      Blockly.Arduino.definitions_['IPADRESS'] = mdeclaration;

  //staticIP=(192,168,1,122);
//gateway=(192,168,1,9);
//subnet=(255,255,255,0);

  var code
  code = 'WiFi.softAPConfig(staticIP, gateway, subnet);\n';
  return code;
};

Blockly.Arduino['iotap_softapip'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code = 'WiFi.softAPIP()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['iotap__numstation'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code = 'WiFi.softAPgetStationNum()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['iotClient_httpbegin'] = function(block) {
  var value_ip = Blockly.Arduino.valueToCode(block, 'ip', Blockly.Arduino.ORDER_ATOMIC);
  var value_message = Blockly.Arduino.valueToCode(block, 'message', Blockly.Arduino.ORDER_ATOMIC);
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
    code+='httpurl+="/";\n';
    code+='httpurl+='+value_message+';\n';
    code+='http.begin(httpurl);\n';
    code +=  'http.GET();\n';
    code +=  'http.end();\n';
  
    return code;
};

Blockly.Arduino['iotclient_sendrequestwithanswer'] = function(block) {
  var value_ip = Blockly.Arduino.valueToCode(block, 'ip', Blockly.Arduino.ORDER_ATOMIC);
  var value_message = Blockly.Arduino.valueToCode(block, 'message', Blockly.Arduino.ORDER_ATOMIC);
  
  //OLD PART
      var varName = "httpurl";
    Blockly.Arduino.definitions_['variables'+varName] = 'String  ' + varName + ';' ;//TEST ADEL
    Blockly.Arduino.definitions_['variables_TheHiddenAnswerOfClient'] = 'String  TheHiddenAnswerOfClient;' ;//TEST ADEL
    
    Blockly.Arduino.definitions_['define_ESP'] = '#include <ESP8266WiFi.h>\n';
    Blockly.Arduino.definitions_['define_ESPHTTPClient'] = '#include <ESP8266HTTPClient.h>\n';

    //Blockly.Arduino.declarehttp_['httpc']='HTTPClient http;\n';
    Blockly.Arduino.definitions_['httpc'] = 'HTTPClient http;\n';
  
  //LA FONCTION
  Blockly.Arduino.definitions_['fonc_SendWithAnswer'] = 'String SendWithAnswer(String IPcache, String monmessagecache) {\n'+
          'httpurl = "http://";\n'+
          'httpurl+=IPcache;\n'+
          'httpurl+="/";\n'+
          'httpurl+=monmessagecache;\n'+
          'http.begin(httpurl);\n'+
          'http.GET();\n'+
          'TheHiddenAnswerOfClient = (http.getString());\n'+
          'http.end();\n'+
          'return TheHiddenAnswerOfClient;\n}\n';
  
  var code = 'SendWithAnswer('+value_ip+','+value_message+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};


Blockly.Arduino['iotc_sendthingspeak'] = function(block) {
  var value_ts_key = Blockly.Arduino.valueToCode(block, 'ts_key', Blockly.Arduino.ORDER_ATOMIC);
  var value_ts_field = Blockly.Arduino.valueToCode(block, 'ts_field', Blockly.Arduino.ORDER_ATOMIC);
  var value_ts_value = Blockly.Arduino.valueToCode(block, 'ts_value', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  
  var mdeclaration;
  mdeclaration = 'String thingSpeakAddress= "http://api.thingspeak.com/update?";\n';
  mdeclaration += 'String writeAPIKey;\n';
  mdeclaration += 'String tsfield1Name;\n';
  mdeclaration += 'String request_string;\n';
  
        Blockly.Arduino.definitions_['define_ESP'] = '#include <ESP8266WiFi.h>\n';
    Blockly.Arduino.definitions_['define_ESPHTTPClient'] = '#include <ESP8266HTTPClient.h>\n';

    Blockly.Arduino.definitions_['ThingSpeak'] = mdeclaration;
    Blockly.Arduino.definitions_['httpc'] = 'HTTPClient http;\n';
    
   var code;
   code = 'writeAPIKey = "key=JYLKR4WVJ5NPEPOC";\n';
   code += 'tsfield1Name = "&field1=10";\n';
   //code += 'request_string = thingSpeakAddress + writeAPIKey + tsfield1Name;\n'
   code += 'request_string = thingSpeakAddress;\n';
   code +='request_string += "key=";\n';
   code += 'request_string += '+ value_ts_key +';\n';
   code += 'request_string += "&";\n';
   code +='request_string += '+value_ts_field+';\n';
   code += 'request_string += "=";\n';
   code +='request_string += '+value_ts_value+';\n';
   code += 'http.begin(request_string);\n';
   code +=  'http.GET();\nhttp.end();\n';
  return code;
};

Blockly.Arduino['iotClient_readrequest'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code = "http.getString()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['iotc_connectweb'] = function(block) {
  var value_web_site = Blockly.Arduino.valueToCode(block, 'Web_site', Blockly.Arduino.ORDER_ATOMIC);
  var value_web_port = Blockly.Arduino.valueToCode(block, 'Web_Port', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  Blockly.Arduino.definitions_['client'] = 'WiFiClient client;\n';
  var code = 'client.connect('+value_web_site+','+ value_web_port+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['iotc_sendtweet'] = function(block) {
  var value_ts_key = Blockly.Arduino.valueToCode(block, 'ts_key', Blockly.Arduino.ORDER_ATOMIC);
  var value_ts_tweet = Blockly.Arduino.valueToCode(block, 'ts_tweet', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var daclaretweet ="";
  daclaretweet =  'char thingSpeakAddress[] = "api.thingspeak.com";\n';
  daclaretweet += 'String thingtweetAPIKey = '+value_ts_key+';\n';
  daclaretweet += 'String tsData;\n';
  
  Blockly.Arduino.definitions_['dectweet'] = daclaretweet;
  Blockly.Arduino.definitions_['client'] = 'WiFiClient client;\n';
    
  var code = 'tsData = "api_key="+thingtweetAPIKey+"&status="+'+value_ts_tweet+';\n';
  code += 'client.print("POST /apps/thingtweet/1/statuses/update HTTP/1.1\\n");\n';
  code += 'client.print("Host: api.thingspeak.com\\n");\n';
  code += 'client.print("Connection: close\\n");\n';
  code += 'client.print("Content-Type: application/x-www-form-urlencoded\\n");\n';
  code += 'client.print("Content-Length: ");\n';
  code += 'client.print(tsData.length());\n';
  code += 'client.print("\\n\\n");\n';
  code +='client.print(tsData);\n';
    
    return code;
};

Blockly.Arduino['iotc_ifttt'] = function(block) {
  var value_key = Blockly.Arduino.valueToCode(block, 'key', Blockly.Arduino.ORDER_ATOMIC);
  var value_event = Blockly.Arduino.valueToCode(block, 'event', Blockly.Arduino.ORDER_ATOMIC);
  var value_value1 = Blockly.Arduino.valueToCode(block, 'value1', Blockly.Arduino.ORDER_ATOMIC);
  var value_value2 = Blockly.Arduino.valueToCode(block, 'value2', Blockly.Arduino.ORDER_ATOMIC);
  var value_value3 = Blockly.Arduino.valueToCode(block, 'value3', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  
  //DECARATION
  Blockly.Arduino.definitions_['client'] = 'WiFiClient client;\n';
  
  var madeclaration;
  madeclaration ='String MakerIFTTT_Key ;\n;';
  madeclaration +='String MakerIFTTT_Event;\n';
  madeclaration +='char *append_str(char *here, String s) {  int i=0; while (*here++ = s[i]){i++;};return here-1;}\n';
  madeclaration +='char *append_ul(char *here, unsigned long u) { char buf[20]; return append_str(here, ultoa(u, buf, 10));}\n';
  madeclaration +='char post_rqst[256];char *p;char *content_length_here;char *json_start;int compi;\n';
  madeclaration +='\n';
  madeclaration +='\n';
  madeclaration +='\n';
  
    Blockly.Arduino.definitions_['ifttt_dec'] = madeclaration;

  
    var code;
    code = 'MakerIFTTT_Key ='+value_key+';\n';
    code +='MakerIFTTT_Event ='+value_event+';\n';
    code +='p = post_rqst;\n';
    code +='p = append_str(p, "POST /trigger/");\n';
    code +='p = append_str(p, MakerIFTTT_Event);\n';
    code +='p = append_str(p, "/with/key/");\n';
    code +='p = append_str(p, MakerIFTTT_Key);\n';
    code +='p = append_str(p, " HTTP/1.1\\r\\n");\n';
    code +='p = append_str(p, "Host: maker.ifttt.com\\r\\n");\n';
    code +='p = append_str(p, "Content-Type: application/json\\r\\n");\n';
    code +='p = append_str(p, "Content-Length: ");\n';
    code +='content_length_here = p;\n';
    code +='p = append_str(p, "NN\\r\\n");\n';
    code +='p = append_str(p, "\\r\\n");\n';
    code +='json_start = p;\n';
    code +='p = append_str(p, "{\\"value1\\":\\"");\n';
    code +='p = append_str(p, '+value_value1+');\n';
    code +='p = append_str(p, "\\",\\"value2\\":\\"");\n';
    code +='p = append_str(p, '+value_value2+');\n';
    code +='p = append_str(p, "\\",\\"value3\\":\\"");\n';
    code +='p = append_str(p, '+value_value3+');\n';
    code +='p = append_str(p, "\\"}");\n';
    code +='\n';
    code +='compi= strlen(json_start);\n';
    code +="content_length_here[0] = '0' + (compi/10);\n";
    code +="content_length_here[1] = '0' + (compi%10);\n";
    code +='client.print(post_rqst);\n';
    code +='\n';
    code +='\n';
    
  return code;
};

Blockly.Arduino['thingspeak_readintfield_private'] = function(block) {
  var value_channum = Blockly.Arduino.valueToCode(block, 'chanNum', Blockly.Arduino.ORDER_ATOMIC);
  var value_fieldnum = Blockly.Arduino.valueToCode(block, 'fieldnum', Blockly.Arduino.ORDER_ATOMIC);
  var value_apik = Blockly.Arduino.valueToCode(block, 'Apik', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  
  Blockly.Arduino.definitions_['define_THINKSPEAK'] = '#include <ThingSpeak.h> \n';
  Blockly.Arduino.definitions_['client'] = 'WiFiClient client;\n';
  Blockly.Arduino.setups_['setup_ThingSpeak_begin']='ThingSpeak.begin(client);\n';

  
  var code = 'ThingSpeak.readIntField('+value_channum+','+value_fieldnum+','+value_apik+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['thingspeak_readintfield_public'] = function(block) {
  var value_channum = Blockly.Arduino.valueToCode(block, 'chanNum', Blockly.Arduino.ORDER_ATOMIC);
  var value_fieldnum = Blockly.Arduino.valueToCode(block, 'fieldnum', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  
  Blockly.Arduino.definitions_['define_THINKSPEAK'] = '#include <ThingSpeak.h> \n';
  Blockly.Arduino.definitions_['client'] = 'WiFiClient client;\n';
  Blockly.Arduino.setups_['setup_ThingSpeak_begin']='ThingSpeak.begin(client);\n'

  
  var code = 'ThingSpeak.readIntField('+value_channum+','+value_fieldnum+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['thingspeak_readfield_priv'] = function(block) {
  var value_channum = Blockly.Arduino.valueToCode(block, 'chanNum', Blockly.Arduino.ORDER_ATOMIC);
  var value_fieldnum = Blockly.Arduino.valueToCode(block, 'fieldnum', Blockly.Arduino.ORDER_ATOMIC);
  var value_apik = Blockly.Arduino.valueToCode(block, 'Apik', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_read_type = block.getFieldValue('read_type');
    // TODO: Assemble JavaScript into code variable.
  
  Blockly.Arduino.definitions_['define_THINKSPEAK'] = '#include <ThingSpeak.h> \n';
  Blockly.Arduino.definitions_['client'] = 'WiFiClient client;\n';
  Blockly.Arduino.setups_['setup_ThingSpeak_begin']='ThingSpeak.begin(client);\n'

  var code;
  var code = 'ThingSpeak.read'+dropdown_read_type+'Field('+value_channum+','+value_fieldnum+','+value_apik+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['thingspeak_readfield_public'] = function(block) {
  var value_channum = Blockly.Arduino.valueToCode(block, 'chanNum', Blockly.Arduino.ORDER_ATOMIC);
  var value_fieldnum = Blockly.Arduino.valueToCode(block, 'fieldnum', Blockly.Arduino.ORDER_ATOMIC);
  var value_apik = Blockly.Arduino.valueToCode(block, 'Apik', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_read_type = block.getFieldValue('read_type');
    // TODO: Assemble JavaScript into code variable.
  
  Blockly.Arduino.definitions_['define_THINKSPEAK'] = '#include <ThingSpeak.h> \n';
  Blockly.Arduino.definitions_['client'] = 'WiFiClient client;\n';
  Blockly.Arduino.setups_['setup_ThingSpeak_begin']='ThingSpeak.begin(client);\n'

  var code;
  var code = 'ThingSpeak.read'+dropdown_read_type+'Field('+value_channum+','+value_fieldnum+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ntp_client'] = function(block) {
  var dropdown_time_type = block.getFieldValue('time_type');
  
  //DEFINITION
  Blockly.Arduino.definitions_['define_WiFiUdp'] = '#include <WiFiUdp.h>\n'; 
  Blockly.Arduino.definitions_['define_localPort'] = 'unsigned int localPort = 2390;\n';
  Blockly.Arduino.definitions_['define_timeServerIP'] = 'IPAddress timeServerIP; \n';
  Blockly.Arduino.definitions_['define_ntpServerName'] = 'const char* ntpServerName = "time.nist.gov";\n';
  Blockly.Arduino.definitions_['define_Const_NTP_PACKET_SIZE'] = 'const int NTP_PACKET_SIZE = 48;\n';
  Blockly.Arduino.definitions_['define_NTP_PACKET_SIZE'] = 'byte packetBuffer[ NTP_PACKET_SIZE];\n';
  Blockly.Arduino.definitions_['define_WiFiUDP_declare'] = 'WiFiUDP udp;\n';
  Blockly.Arduino.definitions_['define_'] = '\n';
  Blockly.Arduino.definitions_['define_'] = '\n';
  
  Blockly.Arduino.setups_['setup_udp_begin']='udp.begin(localPort);\n'

  Blockly.Arduino.definitions_['define_sendNTPpacket'] = 'unsigned long sendNTPpacket(IPAddress& address)\n{\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'memset(packetBuffer, 0, NTP_PACKET_SIZE);\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'packetBuffer[0] = 0b11100011;\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'packetBuffer[1] = 0;\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'packetBuffer[2] = 6;\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'packetBuffer[3] = 0xEC;\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'packetBuffer[12]  = 49;\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'packetBuffer[13]  = 0x4E;\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'packetBuffer[14]  = 49;\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'packetBuffer[15]  = 52;\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'udp.beginPacket(address, 123);\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'udp.write(packetBuffer, NTP_PACKET_SIZE);\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'udp.endPacket();\n}\n';
  
  
  Blockly.Arduino.definitions_['define_ntp_time_function'] = 'unsigned long ntp_time(){\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '    unsigned long retour;\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '   WiFi.hostByName(ntpServerName, timeServerIP); \n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '   sendNTPpacket(timeServerIP);\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '   delay(1000);\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '   int cb = udp.parsePacket();\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '   if (!cb) {\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '     retour = 0;\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '   }\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '  else {\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '    udp.read(packetBuffer, NTP_PACKET_SIZE); \n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '    unsigned long highWord = word(packetBuffer[40], packetBuffer[41]);\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '    unsigned long lowWord = word(packetBuffer[42], packetBuffer[43]);\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '    unsigned long secsSince1900 = highWord << 16 | lowWord;\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '    retour = secsSince1900;\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '  }\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '    return retour;\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '  }\n';
  //Blockly.Arduino.definitions_['define_sendNTPpacket'] += '\n';
  
  
  //Blockly.Arduino.definitions_['define_'] = '\n';
  //Blockly.Arduino.definitions_['define_'] = '\n';
  //Blockly.Arduino.definitions_['define_'] = '\n';


  
  
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['ntp_ntpunix'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_ntp_server = Blockly.Arduino.valueToCode(block, 'ntp_server', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  
    //DEFINITION
  Blockly.Arduino.definitions_['define_WiFiUdp'] = '#include <WiFiUdp.h>\n'; 
  Blockly.Arduino.definitions_['define_localPort'] = 'unsigned int localPort = 2390;\n';
  Blockly.Arduino.definitions_['define_timeServerIP'] = 'IPAddress timeServerIP; \n';
  Blockly.Arduino.definitions_['define_ntpServerName'] = 'const char* ntpServerName = '+value_ntp_server+';\n';
  Blockly.Arduino.definitions_['define_Const_NTP_PACKET_SIZE'] = 'const int NTP_PACKET_SIZE = 48;\n';
  Blockly.Arduino.definitions_['define_NTP_PACKET_SIZE'] = 'byte packetBuffer[ NTP_PACKET_SIZE];\n';
  Blockly.Arduino.definitions_['define_WiFiUDP_declare'] = 'WiFiUDP udp;\n';
  Blockly.Arduino.definitions_['define_'] = '\n';
  Blockly.Arduino.definitions_['define_'] = '\n';
  
  Blockly.Arduino.setups_['setup_udp_begin']='udp.begin(localPort);\n'

  Blockly.Arduino.definitions_['define_sendNTPpacket'] = 'unsigned long sendNTPpacket(IPAddress& address)\n{\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'memset(packetBuffer, 0, NTP_PACKET_SIZE);\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'packetBuffer[0] = 0b11100011;\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'packetBuffer[1] = 0;\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'packetBuffer[2] = 6;\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'packetBuffer[3] = 0xEC;\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'packetBuffer[12]  = 49;\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'packetBuffer[13]  = 0x4E;\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'packetBuffer[14]  = 49;\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'packetBuffer[15]  = 52;\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'udp.beginPacket(address, 123);\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'udp.write(packetBuffer, NTP_PACKET_SIZE);\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'udp.endPacket();\n}\n';
  
  
  Blockly.Arduino.definitions_['define_ntp_time_function'] = 'unsigned long ntp_time(){\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '    unsigned long retour;\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '   WiFi.hostByName(ntpServerName, timeServerIP); \n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '   sendNTPpacket(timeServerIP);\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '   delay(1000);\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '   int cb = udp.parsePacket();\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '   if (!cb) {\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '     retour = 0;\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '   }\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '  else {\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '    udp.read(packetBuffer, NTP_PACKET_SIZE); \n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '    unsigned long highWord = word(packetBuffer[40], packetBuffer[41]);\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '    unsigned long lowWord = word(packetBuffer[42], packetBuffer[43]);\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '    unsigned long secsSince1900 = highWord << 16 | lowWord;\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '    retour = secsSince1900;\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '  }\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '    return retour;\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '  }\n';
  
  Blockly.Arduino.definitions_['define_ntp_time_function'] += 'unsigned long unix_time(){';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '  unsigned long retour;\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '  WiFi.hostByName(ntpServerName, timeServerIP); \n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '  sendNTPpacket(timeServerIP);\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '  delay(1000); \n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '  int cb = udp.parsePacket();\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '  if (!cb) {\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '    retour = 0;\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '  }\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '  else {\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '    udp.read(packetBuffer, NTP_PACKET_SIZE);\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '    unsigned long highWord = word(packetBuffer[40], packetBuffer[41]);\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '    unsigned long lowWord = word(packetBuffer[42], packetBuffer[43]);\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '    unsigned long secsSince1900 = highWord << 16 | lowWord;\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '    const unsigned long seventyYears = 2208988800UL;\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '    unsigned long epoch = secsSince1900 - seventyYears;\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '    retour = epoch;\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '  }\n';
  Blockly.Arduino.definitions_['define_ntp_time_function'] += '  return retour;\n';

  var code;
  if (dropdown_name=="ntptime") {
      code = 'ntp_time()';
  }
  if (dropdown_name=="unixtime") {
      code = 'unix_time()';
  }
   return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['time_utc'] = function(block) {
  var value_ntp_server = Blockly.Arduino.valueToCode(block, 'ntp_server', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  
  
  Blockly.Arduino.definitions_['define_WiFiUdp'] = '#include <WiFiUdp.h>\n'; 
  Blockly.Arduino.definitions_['define_localPort'] = 'unsigned int localPort = 2390;\n';
  Blockly.Arduino.definitions_['define_timeServerIP'] = 'IPAddress timeServerIP; \n';
  Blockly.Arduino.definitions_['define_ntpServerName'] = 'const char* ntpServerName = '+value_ntp_server+';\n';
  Blockly.Arduino.definitions_['define_Const_NTP_PACKET_SIZE'] = 'const int NTP_PACKET_SIZE = 48;\n';
  Blockly.Arduino.definitions_['define_NTP_PACKET_SIZE'] = 'byte packetBuffer[ NTP_PACKET_SIZE];\n';
  Blockly.Arduino.definitions_['define_WiFiUDP_declare'] = 'WiFiUDP udp;\n';
  Blockly.Arduino.definitions_['define_'] = '\n';
  Blockly.Arduino.definitions_['define_'] = '\n';
  
  Blockly.Arduino.setups_['setup_udp_begin']='udp.begin(localPort);\n'

  Blockly.Arduino.definitions_['define_sendNTPpacket'] = 'unsigned long sendNTPpacket(IPAddress& address)\n{\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'memset(packetBuffer, 0, NTP_PACKET_SIZE);\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'packetBuffer[0] = 0b11100011;\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'packetBuffer[1] = 0;\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'packetBuffer[2] = 6;\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'packetBuffer[3] = 0xEC;\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'packetBuffer[12]  = 49;\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'packetBuffer[13]  = 0x4E;\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'packetBuffer[14]  = 49;\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'packetBuffer[15]  = 52;\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'udp.beginPacket(address, 123);\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'udp.write(packetBuffer, NTP_PACKET_SIZE);\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'udp.endPacket();\n}\n';
  
  Blockly.Arduino.definitions_['define_utc_time_function'] = 'String utc_time (){\n';
  Blockly.Arduino.definitions_['define_utc_time_function'] += '  String retour;\n';
  Blockly.Arduino.definitions_['define_utc_time_function'] += '  WiFi.hostByName(ntpServerName, timeServerIP); \n';
  Blockly.Arduino.definitions_['define_utc_time_function'] += '  sendNTPpacket(timeServerIP);\n';
  Blockly.Arduino.definitions_['define_utc_time_function'] += '  delay(1000);\n';
  Blockly.Arduino.definitions_['define_utc_time_function'] += '  int cb = udp.parsePacket();\n';
  Blockly.Arduino.definitions_['define_utc_time_function'] += '  if (!cb) {\n';
  Blockly.Arduino.definitions_['define_utc_time_function'] += '    retour = "no packet yet";\n';
  Blockly.Arduino.definitions_['define_utc_time_function'] += '  }\n';
  Blockly.Arduino.definitions_['define_utc_time_function'] += '  else {\n';
  Blockly.Arduino.definitions_['define_utc_time_function'] += '    udp.read(packetBuffer, NTP_PACKET_SIZE); // read the packet into the buffer\n';
  Blockly.Arduino.definitions_['define_utc_time_function'] += '    unsigned long highWord = word(packetBuffer[40], packetBuffer[41]);\n';
  Blockly.Arduino.definitions_['define_utc_time_function'] += '    unsigned long lowWord = word(packetBuffer[42], packetBuffer[43]);\n';
  Blockly.Arduino.definitions_['define_utc_time_function'] += '    unsigned long secsSince1900 = highWord << 16 | lowWord;\n';
  Blockly.Arduino.definitions_['define_utc_time_function'] += '    const unsigned long seventyYears = 2208988800UL;\n';
  Blockly.Arduino.definitions_['define_utc_time_function'] += '    unsigned long epoch = secsSince1900 - seventyYears;\n';
  Blockly.Arduino.definitions_['define_utc_time_function'] += '    retour =(epoch  % 86400L) / 3600;\n';
  Blockly.Arduino.definitions_['define_utc_time_function'] += '    retour +=":";\n';
  Blockly.Arduino.definitions_['define_utc_time_function'] += '    if ( ((epoch % 3600) / 60) < 10 ) {\n';
  Blockly.Arduino.definitions_['define_utc_time_function'] += '      retour +="0";\n';
  Blockly.Arduino.definitions_['define_utc_time_function'] += '    }\n';
  Blockly.Arduino.definitions_['define_utc_time_function'] += '    retour += ((epoch  % 3600) / 60);\n';
  Blockly.Arduino.definitions_['define_utc_time_function'] += '    retour +=":";\n';
  Blockly.Arduino.definitions_['define_utc_time_function'] += '    if ( (epoch % 60) < 10 ) {\n';
  Blockly.Arduino.definitions_['define_utc_time_function'] += '      retour +="0";\n';
  Blockly.Arduino.definitions_['define_utc_time_function'] += '    }\n';
  Blockly.Arduino.definitions_['define_utc_time_function'] += '    retour += epoch % 60;\n';
  Blockly.Arduino.definitions_['define_utc_time_function'] += '  }\n';
  Blockly.Arduino.definitions_['define_utc_time_function'] += '   return retour;\n';
  Blockly.Arduino.definitions_['define_utc_time_function'] += '  }\n';

  
  
  

    
  var code = 'utc_time()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['time_hms'] = function(block) {
  var dropdown_choix = block.getFieldValue('choix');
  var value_time_server = Blockly.Arduino.valueToCode(block, 'time_server', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.definitions_['define_WiFiUdp'] = '#include <WiFiUdp.h>\n'; 
  Blockly.Arduino.definitions_['define_localPort'] = 'unsigned int localPort = 2390;\n';
  Blockly.Arduino.definitions_['define_timeServerIP'] = 'IPAddress timeServerIP; \n';
  Blockly.Arduino.definitions_['define_ntpServerName'] = 'const char* ntpServerName = '+value_time_server+';\n';
  Blockly.Arduino.definitions_['define_Const_NTP_PACKET_SIZE'] = 'const int NTP_PACKET_SIZE = 48;\n';
  Blockly.Arduino.definitions_['define_NTP_PACKET_SIZE'] = 'byte packetBuffer[ NTP_PACKET_SIZE];\n';
  Blockly.Arduino.definitions_['define_WiFiUDP_declare'] = 'WiFiUDP udp;\n';
  Blockly.Arduino.definitions_['define_'] = '\n';
  Blockly.Arduino.definitions_['define_'] = '\n';
  
  Blockly.Arduino.setups_['setup_udp_begin']='udp.begin(localPort);\n'

  Blockly.Arduino.definitions_['define_sendNTPpacket'] = 'unsigned long sendNTPpacket(IPAddress& address)\n{\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'memset(packetBuffer, 0, NTP_PACKET_SIZE);\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'packetBuffer[0] = 0b11100011;\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'packetBuffer[1] = 0;\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'packetBuffer[2] = 6;\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'packetBuffer[3] = 0xEC;\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'packetBuffer[12]  = 49;\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'packetBuffer[13]  = 0x4E;\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'packetBuffer[14]  = 49;\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'packetBuffer[15]  = 52;\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'udp.beginPacket(address, 123);\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'udp.write(packetBuffer, NTP_PACKET_SIZE);\n';
  Blockly.Arduino.definitions_['define_sendNTPpacket'] += 'udp.endPacket();\n}\n';
  
  Blockly.Arduino.definitions_['define_time_hms_function'] = 'int time_hms(String param){\n';
  Blockly.Arduino.definitions_['define_time_hms_function'] += '  int h,m,s;\n'; 
  Blockly.Arduino.definitions_['define_time_hms_function'] += '  String retour;\n';
  Blockly.Arduino.definitions_['define_time_hms_function'] += '  WiFi.hostByName(ntpServerName, timeServerIP); \n';
  Blockly.Arduino.definitions_['define_time_hms_function'] += '  sendNTPpacket(timeServerIP);\n';
  Blockly.Arduino.definitions_['define_time_hms_function'] += '  delay(1000);\n';
  Blockly.Arduino.definitions_['define_time_hms_function'] += '  int cb = udp.parsePacket();\n';
  Blockly.Arduino.definitions_['define_time_hms_function'] += '  if (!cb) {\n';
  Blockly.Arduino.definitions_['define_time_hms_function'] += '    retour = "no packet yet";\n';
  Blockly.Arduino.definitions_['define_time_hms_function'] += '  }\n';
  Blockly.Arduino.definitions_['define_time_hms_function'] += '  else {\n';
  Blockly.Arduino.definitions_['define_time_hms_function'] += '    udp.read(packetBuffer, NTP_PACKET_SIZE); // read the packet into the buffer\n';
  Blockly.Arduino.definitions_['define_time_hms_function'] += '    unsigned long highWord = word(packetBuffer[40], packetBuffer[41]);\n';
  Blockly.Arduino.definitions_['define_time_hms_function'] += '    unsigned long lowWord = word(packetBuffer[42], packetBuffer[43]);\n';
  Blockly.Arduino.definitions_['define_time_hms_function'] += '    unsigned long secsSince1900 = highWord << 16 | lowWord;\n';
  Blockly.Arduino.definitions_['define_time_hms_function'] += '    const unsigned long seventyYears = 2208988800UL;\n';
  Blockly.Arduino.definitions_['define_time_hms_function'] += '    unsigned long epoch = secsSince1900 - seventyYears;\n';
  Blockly.Arduino.definitions_['define_time_hms_function'] += '    retour =(epoch  % 86400L) / 3600;\n';
  Blockly.Arduino.definitions_['define_time_hms_function'] += '    h = (epoch  % 86400L) / 3600;\n';
  Blockly.Arduino.definitions_['define_time_hms_function'] += '    retour +=":";\n';
  Blockly.Arduino.definitions_['define_time_hms_function'] += '    if ( ((epoch % 3600) / 60) < 10 ) {\n';
  Blockly.Arduino.definitions_['define_time_hms_function'] += '      retour +="0";\n';
  Blockly.Arduino.definitions_['define_time_hms_function'] += '    }\n';
  Blockly.Arduino.definitions_['define_time_hms_function'] += '    retour += ((epoch  % 3600) / 60);\n';
  Blockly.Arduino.definitions_['define_time_hms_function'] += '    m = ((epoch  % 3600) / 60);\n'; 
  Blockly.Arduino.definitions_['define_time_hms_function'] += '    retour +=":";\n';
  Blockly.Arduino.definitions_['define_time_hms_function'] += '    if ( (epoch % 60) < 10 ) {\n';
  Blockly.Arduino.definitions_['define_time_hms_function'] += '      retour +="0";\n';
  Blockly.Arduino.definitions_['define_time_hms_function'] += '    }\n';
  Blockly.Arduino.definitions_['define_time_hms_function'] += '    retour += epoch % 60;\n';
  Blockly.Arduino.definitions_['define_time_hms_function'] += '    s  = epoch % 60;\n';
  Blockly.Arduino.definitions_['define_time_hms_function'] += '  }\n';
  Blockly.Arduino.definitions_['define_time_hms_function'] += '  if (param.equals("hour")){  return h;} \n'; 
  Blockly.Arduino.definitions_['define_time_hms_function'] += '  if (param.equals("minute")){ return m;} \n';  
  Blockly.Arduino.definitions_['define_time_hms_function'] += '  if (param.equals("second")){ return s;} \n'; 
  Blockly.Arduino.definitions_['define_time_hms_function'] += '  }\n';  
  
  // Blockly.Arduino.definitions_['define_time_hms_function'] += ' \n';  
  
    // TODO: Assemble JavaScript into code variable.
  var code = 'time_hms("'+dropdown_choix+'")';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Arduino['webpage_html'] = function(block) {
  var statements_page_head = Blockly.Arduino.statementToCode(block, 'page_head');
  var statements_page_body = Blockly.Arduino.statementToCode(block, 'page_body');
  // TODO: Assemble JavaScript into code variable.
  var code = 'client.println("HTTP/1.1 200 OK");\n';
  code +='client.println("Content-Type: text/html");\n';
  code += 'client.println("");\n';
  code += 'client.println("<!DOCTYPE HTML>");\n';
  code += 'client.println("<html>");\n';
  code += 'client.println("<head>");\n';
  code += statements_page_head;
  code += 'client.println("</head>");\n';
  code += 'client.println("<body>");\n';
  code += statements_page_body;
  code += 'client.println("</body>");\n';
  code += 'client.println("</html>");\n';
  code += 'client.stop();\n delay(1);\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Arduino['webpage_button'] = function(block) {
  var value_link = Blockly.Arduino.valueToCode(block, 'link', Blockly.Arduino.ORDER_ATOMIC);
  var value_title = Blockly.Arduino.valueToCode(block, 'title', Blockly.Arduino.ORDER_ATOMIC);
  
  
  
  // TODO: Assemble JavaScript into code variable.
  var code = 'client.println(\"<a href=\");\n';
  code += 'client.println(';
  code +=value_link;
  code += ');\n';  
  code += 'client.println(\"><button>");\n';
  code += 'client.println(';
  code +=value_title;
  code += ');\n';
  code += 'client.println("';
  code +='</button></a>\");\n';
  return code;
};

Blockly.Arduino['webpage_genericold'] = function(block) {
  var value_generic_html = Blockly.Arduino.valueToCode(block, 'generic_html', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'client.println(';
  //value_generic_html= value_generic_html.substr(1,value_generic_html.length-2);
  //value_generic_html= value_generic_html.replace(/"/g, '""');
  //value_generic_html = '"'+value_generic_html+'"';
  code +=value_generic_html;
  code +=');\n';
  
  return code;
};

Blockly.Arduino['webpage_generic'] = function(block) {
  var value_generic_html = Blockly.Arduino.valueToCode(block, 'generic_html', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'client.println(';
  var mstr1;
  var str2;
  
  if (value_generic_html.charAt(0)=='"') {
      value_generic_html = value_generic_html.substr(1, value_generic_html.length-2);
      value_generic_html = value_generic_html.replace(/"/g, '\""');
      mstr1="\""; 
      value_generic_html = mstr1.concat(value_generic_html);
      value_generic_html = value_generic_html.concat("\"");
  }
  else{
  value_generic_html= value_generic_html.replace(/"/g, '\""');
  }
  
  code +=value_generic_html;
  code +=');\n';
  return code;
};
Blockly.Arduino['html_heading'] = function(block) {
  var dropdown_heading = block.getFieldValue('heading');
  var colour_name = block.getFieldValue('NAME');
  var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  
  //if (value_name.charAt(0)=='"' || value_name.charAt(0)=='\'' ){value_name= value_name.substr(1,value_name.length-2);}
  // TODO: Assemble JavaScrivalue_namept into code variable.
  var code = 'client.println(\"<'+dropdown_heading+' style=\"\"color:'+colour_name+'\"\">\");\n';
    code+= 'client.println('+value_name+');\n';
  code+='client.println(\"</'+dropdown_heading+'>\");\n';
  return code;
};

Blockly.Arduino['iots_clientavailable'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code = 'client.available()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['webpage_span'] = function(block) {
  var colour_color = block.getFieldValue('color');
  var value_fon_size = Blockly.Arduino.valueToCode(block, 'fon_size', Blockly.Arduino.ORDER_ATOMIC);
  var value_fon_texte = Blockly.Arduino.valueToCode(block, 'fon_texte', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  
  var code = 'client.println(\"<span style=\"\"color:'+colour_color+';font-size:'+value_fon_size+'px\"\">\");\n';
  code+= 'client.println('+value_fon_texte+');\n';
  code += "client.println(\"</span>\");\n";
  
  return code;
};

Blockly.Arduino['webpage_br'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "client.println(\"<br>\");\n";
  return code;
};

Blockly.Arduino['ipt_pingip'] = function(block) {
  var value_ip_a = Blockly.Arduino.valueToCode(block, 'ip_a', Blockly.Arduino.ORDER_ATOMIC);
  var value_ip_b = Blockly.Arduino.valueToCode(block, 'ip_b', Blockly.Arduino.ORDER_ATOMIC);
  var value_ip_c = Blockly.Arduino.valueToCode(block, 'ip_c', Blockly.Arduino.ORDER_ATOMIC);
  var value_ip_d = Blockly.Arduino.valueToCode(block, 'ip_d', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.definitions_['define_Ping'] = '#include <ESP8266Ping.h>\n';
  
  Blockly.Arduino.definitions_['define_ping_function'] = 'boolean mypingip(int a, int b, int c, int d)\n{\n';
  Blockly.Arduino.definitions_['define_ping_function']+= 'boolean result;\n';
  Blockly.Arduino.definitions_['define_ping_function']+= 'IPAddress remote_ip(a,b,c,d);\n';
  Blockly.Arduino.definitions_['define_ping_function']+= 'result = Ping.ping(remote_ip);\n';
  Blockly.Arduino.definitions_['define_ping_function']+= 'return result;\n}\n';
  // TODO: Assemble JavaScript into code variable.
  var code = 'mypingip('+value_ip_a+','+value_ip_b+','+value_ip_c+','+value_ip_d+')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['iot_pingweb'] = function(block) {
  var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
    Blockly.Arduino.definitions_['define_Ping'] = '#include <ESP8266Ping.h>\n';
  var code = 'Ping.ping('+value_name+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['iot_scannetworks'] = function(block) {
  Blockly.Arduino.definitions_['define_ESP'] = '#include <ESP8266WiFi.h>\n';
  
  var code = 'WiFi.scanNetworks()';

    return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['iot_scandelete'] = function(block) {
    
    Blockly.Arduino.definitions_['define_ESP'] = '#include <ESP8266WiFi.h>\n';
    
  var code = 'WiFi.scanDelete();\n';
  return code;
};

Blockly.Arduino['iot_wifissid'] = function(block) {
    
    Blockly.Arduino.definitions_['define_ESP'] = '#include <ESP8266WiFi.h>\n';
    
  var value_ssid = Blockly.Arduino.valueToCode(block, 'ssid', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'WiFi.SSID('+value_ssid+') ';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['iot_encryptiontype'] = function(block) {
  var value_ssid = Blockly.Arduino.valueToCode(block, 'ssid', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_enc_type = block.getFieldValue('enc_type');
  // TODO: Assemble JavaScript into code variable.
  
  var code = 'WiFi.encryptionType('+value_ssid+')=='+dropdown_enc_type;
  
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['iot_wifirssi'] = function(block) {
    
    Blockly.Arduino.definitions_['define_ESP'] = '#include <ESP8266WiFi.h>\n';
    
  var value_rssi = Blockly.Arduino.valueToCode(block, 'rssi', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'WiFi.RSSI('+value_rssi+') ';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['iot_adafruit_mqtt_setup'] = function(block) {
  var value_user_name = Blockly.Arduino.valueToCode(block, 'user_name', Blockly.Arduino.ORDER_ATOMIC);
  var value_key = Blockly.Arduino.valueToCode(block, 'key', Blockly.Arduino.ORDER_ATOMIC);
  var value_port = Blockly.Arduino.valueToCode(block, 'Port', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.definitions_['Adafruit_MQTT'] = '#include "Adafruit_MQTT.h"';
  Blockly.Arduino.definitions_['Adafruit_MQTT_Client'] = '#include "Adafruit_MQTT_Client.h"';
  
  Blockly.Arduino.definitions_['AIO_SERVER'] = '#define AIO_SERVER      "io.adafruit.com"';
  Blockly.Arduino.definitions_['AIO_SERVERPORT'] = '#define AIO_SERVERPORT  ' + value_port;
  Blockly.Arduino.definitions_['AIO_USERNAME'] = '#define AIO_USERNAME  ' + value_user_name; 
  Blockly.Arduino.definitions_['AIO_KEY'] = '#define AIO_KEY  ' + value_key;  
  
  Blockly.Arduino.definitions_['client'] = 'WiFiClient client;\n';
  
  Blockly.Arduino.definitions_['ZA_Adafruit_MQTT_Client'] = '\nAdafruit_MQTT_Client mqtt(&client, AIO_SERVER, AIO_SERVERPORT, AIO_USERNAME, AIO_KEY);\n';
  
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  return code;
};

Blockly.Arduino['iot_adafruit_isconnected'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  
  Blockly.Arduino.definitions_['MQTT_connect'] = 'boolean MQTT_connect();';
  Blockly.Arduino.definitions_['MQTT_connect_function'] = '\nboolean MQTT_connect() {  int8_t ret; if (mqtt.connected()) {    return true; }  uint8_t retries = 3;  while ((ret = mqtt.connect()) != 0) { mqtt.disconnect(); delay(2000);  retries--;if (retries == 0) { return false; }} return true;}\n';
  
  var code = 'MQTT_connect()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['iot_adafruit_publish'] = function(block) {
  var value_feed_name = Blockly.Arduino.valueToCode(block, 'feed_name', Blockly.Arduino.ORDER_ATOMIC);
  var value_feed_data = Blockly.Arduino.valueToCode(block, 'feed_data', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  
  value_feed_name = value_feed_name.replace('"','');
  value_feed_name = value_feed_name.replace('"','');
  
  Blockly.Arduino.definitions_['MQTT_ADA_Publish'+value_feed_name]='Adafruit_MQTT_Publish '+value_feed_name+' = Adafruit_MQTT_Publish(&mqtt, AIO_USERNAME "/feeds/'+value_feed_name+'");';
  
  
  value_feed_name = value_feed_name.replace('"','');
  var code = value_feed_name+'.publish('+value_feed_data+')'; 
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['iot_adafruit_setup_feed'] = function(block) {
  var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  
  value_name = value_name.replace('"','');
  value_name = value_name.replace('"','');
  Blockly.Arduino.definitions_['iot_setup_feed'+value_name] = 'Adafruit_MQTT_Subscribe '+ value_name+' = Adafruit_MQTT_Subscribe(&mqtt, AIO_USERNAME "/feeds/'+value_name+'");';
  
  var code = '\nmqtt.subscribe(&'+value_name+');\n';
  return code;
};

Blockly.Arduino['iot_adafruit_wait_subscription'] = function(block) {
  var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  var statements_mystatement = Blockly.Arduino.statementToCode(block, 'mystatement');
  
    // TODO: Assemble JavaScript into code variable.
  value_name = value_name.replace('"','');
  value_name = value_name.replace('"','');
  
    var code = 'Adafruit_MQTT_Subscribe *'+value_name+';\n'
    code += "while (("+value_name+" = mqtt.readSubscription(5000))) {\n";
    code += statements_mystatement;
    code += '\n}\n';
  return code;
};

Blockly.Arduino['iot_adafruit_sub_equal_feed'] = function(block) {
  var value_v1 = Blockly.Arduino.valueToCode(block, 'V1', Blockly.Arduino.ORDER_ATOMIC);
  var value_v2 = Blockly.Arduino.valueToCode(block, 'V2', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  
  value_v1 = value_v1.replace('"','');
  value_v1 = value_v1.replace('"','');
  
  value_v2 = value_v2.replace('"','');
  value_v2 = value_v2.replace('"','');
    
    var code = value_v1 + ' == &' + value_v2 ;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['iot_adafruit_lastread'] = function(block) {
  var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  
  value_name = value_name.replace('"','');
  value_name = value_name.replace('"','');
  
  var code = '(char *)'+value_name+'.lastread';
  
  //code = code.replace('(','');
  //code = code.replace(')','');
  // TODO: Change ORDER_NONE to the correct strength.ard
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['watch_dog'] = function(block) {
  var value_mycounter = Blockly.Arduino.valueToCode(block, 'mycounter', Blockly.Arduino.ORDER_ATOMIC);
  
  // INCLUDE #include <Ticker.h>
  Blockly.Arduino.definitions_['define_Ticker'] = '#include <Ticker.h>';
  
  Blockly.Arduino.definitions_['variables_secondTick'] = 'Ticker secondTick;';
  Blockly.Arduino.definitions_['variables_debug1'] = '#define debug 1'; 
  Blockly.Arduino.definitions_['variables_watchdogCount'] = 'volatile int watchdogCount = 0;';
  
  
  var myfunction;
  myfunction = 'void ISRwatchdog() {\n';
  myfunction += 'watchdogCount++;\n';
  myfunction += 'if ( watchdogCount == '+value_mycounter+' ) {\n';
  myfunction += '   (debug) && Serial.println("The watch dog is running");\n';
  myfunction += '   ESP.reset();\n';
  myfunction += '  }\n';
  myfunction += '}\n';

  Blockly.Arduino.definitions_['variables_ISRwatchdog'] = myfunction;
  
  Blockly.Arduino.setups_['setup_secondTickattach']='secondTick.attach(1, ISRwatchdog);\n';
  
  
  // TODO: Assemble JavaScript into code variable.
  var code = 'watchdogCount = 0;\n';
  return code;
}

Blockly.Arduino['webservice_writefirebase'] = function(block) {
  var value_key = Blockly.Arduino.valueToCode(block, 'key', Blockly.Arduino.ORDER_ATOMIC);
  var value_reg_id = Blockly.Arduino.valueToCode(block, 'reg_id', Blockly.Arduino.ORDER_ATOMIC);
  var value_message = Blockly.Arduino.valueToCode(block, 'message', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.definitions_['define_FirebaseCloudMessaging'] = '#include <FirebaseCloudMessaging.h>';
    
  var myrandom = Math.floor((Math.random() * 1000) + 1);  
  Blockly.Arduino.definitions_['SERVER_KEY_'+myrandom] = '#define SERVER_KEY_'+myrandom+'  ' + value_key;
  Blockly.Arduino.definitions_['CLIENT_REGISTRATION_ID_'+myrandom] = '#define CLIENT_REGISTRATION_ID_'+myrandom+'  ' + value_reg_id;
  
  Blockly.Arduino.definitions_['fonc_sendfirebase'] = 'int sendtofirebase(String fb_key, String fb_id){\n'+
          'FirebaseCloudMessaging fcm(fb_key);\n'+
          'FirebaseCloudMessage message =\n'+
          ''+
          
          'return 0;\n'+
          '}\n';
  //##define CLIENT_REGISTRATION_ID "key_from_client_after_registration"
  // TODO: Assemble JavaScript into code variable.
  var code = 'sendtofirebase(SERVER_KEY_'+myrandom+',CLIENT_REGISTRATION_ID_'+myrandom+')';
  return [code, Blockly.Arduino.ORDER_NONE];
};


Blockly.Arduino['iot_wunderground_conditions'] = function(block) {
  var text_wcon = block.getFieldValue('wcon');
  var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  var value_city_name = Blockly.Arduino.valueToCode(block, 'city_name', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  
  var varName = "httpurl";
  
  Blockly.Arduino.definitions_['define_ArduinoJson'] = '#include <ArduinoJson.h>';
  Blockly.Arduino.definitions_['define_DynamicJsonBuffer'] = 'DynamicJsonBuffer jsonBuffer(3000);'; 
  Blockly.Arduino.definitions_['define_ESPHTTPClient'] = '#include <ESP8266HTTPClient.h>\n';
  Blockly.Arduino.definitions_['httpc'] = 'HTTPClient http;\n';
  Blockly.Arduino.definitions_['variables_TheHiddenAnswerOfClient'] = 'String  TheHiddenAnswerOfClient;' ;//TEST ADEL
    
  
  Blockly.Arduino.definitions_['variables'+varName] = 'String  ' + varName + ';' ;//TEST ADEL
 
 Blockly.Arduino.definitions_['fonc_SendWithAnswer'] = 'String SendWithAnswer(String IPcache, String monmessagecache) {\n'+
          'httpurl = "http://";\n'+
          'httpurl+=IPcache;\n'+
          'httpurl+="/";\n'+
          'httpurl+=monmessagecache;\n'+
          'http.begin(httpurl);\n'+
          'http.GET();\n'+
          'TheHiddenAnswerOfClient = (http.getString());\n'+
          'http.end();\n'+
          'return TheHiddenAnswerOfClient;\n}\n';
  
  
    Blockly.Arduino.definitions_['fonc_parsing_result'] = 'int parsing_result (JsonObject& monparam){\n'+
          'JsonObject& '+text_wcon+' = jsonBuffer.parseObject((SendWithAnswer("api.wunderground.com","api/'+dropdown_name+'/conditions/q/CA/Bizerte.json")));\n'+
          'if (!monparam.success())return 0;\n'+
          'else\n'+
          'return 1;\n'+
          '}\n';  
  
  // TODO: Assemble JavaScript into code variable.
  var code = 'parsing_result('+text_wcon+')';
  
  // TODO: Assemble JavaScript into code variable.
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['iot_timev2'] = function(block) {
  var value_time_server = Blockly.Arduino.valueToCode(block, 'time_server', Blockly.Arduino.ORDER_ATOMIC);
  var value_time_zone = Blockly.Arduino.valueToCode(block, 'time_zone', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_choix = block.getFieldValue('Choix');
  
  // DECLARATION
  Blockly.Arduino.definitions_['define_TimeLib'] = '#include <TimeLib.h>';
  Blockly.Arduino.definitions_['define_WiFiUdp'] = '#include <WiFiUdp.h>';
  
  Blockly.Arduino.definitions_['define_ntpServerName'] = 'char ntpServerName[] = '+value_time_server+';';
  Blockly.Arduino.definitions_['define_ntpTimezone'] = 'int timeZone = '+value_time_zone+';';
  Blockly.Arduino.definitions_['define_WiFiUDP_declare'] = 'WiFiUDP Udp;';
  Blockly.Arduino.definitions_['define_localPort'] = 'unsigned int localPort = 8888;';
  Blockly.Arduino.definitions_['declare_ntpfuunctions'] = 'time_t getNtpTime();\n'+
          'int digitalClockDisplay(char d);\n'+
          'void printDigits(int digits);\n'+
          'void sendNTPpacket(IPAddress &address);';
  
  Blockly.Arduino.setupsfin_['setup_ntpserver']='Udp.begin(localPort);\n'+
          "setSyncProvider(getNtpTime);\n"+
          "setSyncInterval(300);\n";
  
  Blockly.Arduino.definitions_['fonc_digitalClockDisplay']="int digitalClockDisplay(char m){\n"+
          "int interm;\n"+
          "if (m=='h'){\ninterm=hour();\nreturn interm;\n}\n"+
          "if (m=='m'){\ninterm=minute();\nreturn interm;\n}\n"+
          "if (m=='s'){\ninterm=second();\nreturn interm;\n}\n"+
          "if (m=='j'){\ninterm=day();\nreturn interm;\n}\n"+
          "if (m=='n'){\ninterm=month();\nreturn interm;\n}\n"+
          "if (m=='y'){\ninterm=year();\nreturn interm;\n}\n}\n";
  
 Blockly.Arduino.definitions_['fonc_ntpCode']=" /*-------- NTP code ----------*/\n"+
 "const int NTP_PACKET_SIZE = 48; // NTP time is in the first 48 bytes of message\n"+
"byte packetBuffer[NTP_PACKET_SIZE]; //buffer to hold incoming & outgoing packets\n"+
"time_t getNtpTime()\n{\n"+
  "IPAddress ntpServerIP; // NTP server's ip address\n"+
"while (Udp.parsePacket() > 0) ; // discard any previously received packets\n"+
  "Serial.println(\"Transmit NTP Request\");\n"+
  "// get a random server from the pool\n"+
  "WiFi.hostByName(ntpServerName, ntpServerIP);\n"+
  "Serial.print(ntpServerName);\n"+
  "Serial.print(\":\");\n"+
  "Serial.println(ntpServerIP);\n"+
  "sendNTPpacket(ntpServerIP);\n"+
  "uint32_t beginWait = millis();\n"+
  "while (millis() - beginWait < 1500) {\n"+
    "int size = Udp.parsePacket();\n"+
    "if (size >= NTP_PACKET_SIZE) {\n"+
      "Serial.println(\"Receive NTP Response\");\n"+
      "Udp.read(packetBuffer, NTP_PACKET_SIZE);  // read packet into the buffer\n"+
      "unsigned long secsSince1900;\n"+
      "// convert four bytes starting at location 40 to a long integer\n"+
      "secsSince1900 =  (unsigned long)packetBuffer[40] << 24;\n"+
      "secsSince1900 |= (unsigned long)packetBuffer[41] << 16;\n"+
      "secsSince1900 |= (unsigned long)packetBuffer[42] << 8;\n"+
      "secsSince1900 |= (unsigned long)packetBuffer[43];\n"+
      "return secsSince1900 - 2208988800UL + timeZone * SECS_PER_HOUR;\n}\n}\n"+
      "Serial.println(\"No NTP Response :-(\");\n"+
       "return 0; // return 0 if unable to get the time\n}\n"+
       "void sendNTPpacket(IPAddress &address)\n{\n"+
       "memset(packetBuffer, 0, NTP_PACKET_SIZE);\n"+
       "packetBuffer[0] = 0b11100011;   // LI, Version, Mode\n"+
        "packetBuffer[1] = 0;     // Stratum, or type of clock\n"+
  "packetBuffer[2] = 6;     // Polling Interval\n"+
  "packetBuffer[3] = 0xEC;  // Peer Clock Precision\n"+
  "packetBuffer[12] = 49;\n"+
  "packetBuffer[13] = 0x4E;\n"+
  "packetBuffer[14] = 49;\n"+
  "packetBuffer[15] = 52;\n"+
  "Udp.beginPacket(address, 123); //NTP requests are to port 123\n"+
  "Udp.write(packetBuffer, NTP_PACKET_SIZE);\n"+
  "Udp.endPacket();\n}\n";

 
 
  var code = 'digitalClockDisplay(\''+dropdown_choix+'\')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['iot_deepsleep'] = function(block) {
  var value_time_ds = Blockly.Arduino.valueToCode(block, 'time_ds', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'ESP.deepSleep('+value_time_ds+'e6);\n';
  return code;
};

Blockly.Arduino['iot_cayennesetup'] = function(block) {
  var value_cayenne_username = Blockly.Arduino.valueToCode(block, 'Cayenne_UserName', Blockly.Arduino.ORDER_ATOMIC);
  var value_cayenne_passowrd = Blockly.Arduino.valueToCode(block, 'Cayenne_Passowrd', Blockly.Arduino.ORDER_ATOMIC);
  var value_cayenne_clientid = Blockly.Arduino.valueToCode(block, 'Cayenne_clientID', Blockly.Arduino.ORDER_ATOMIC);
  var checkbox_debug_state = block.getFieldValue('debug_state') == 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  
  if (checkbox_debug_state==true)
  {
      Blockly.Arduino.definitions_['define_CayenneMQTTESP8266'] = '#define CAYENNE_DEBUG\n'+
          '#define CAYENNE_PRINT Serial\n'+
          '#include <CayenneMQTTESP8266.h>//IMPPORT LIBRARY FROM http://easycoding.tn/index.php/resources/\n\n'+
          'char Cayenneusername[] = '+value_cayenne_username+';\n'+
          'char Cayennepassword[] = '+value_cayenne_passowrd+';\n'+
          'char CayenneclientID[] = '+value_cayenne_clientid+';';
  }else
  {
      Blockly.Arduino.definitions_['define_CayenneMQTTESP8266'] = '#include <CayenneMQTTESP8266.h>//IMPPORT LIBRARY FROM http://easycoding.tn/index.php/resources/\n\n'+
          'char Cayenneusername[] = '+value_cayenne_username+';\n'+
          'char Cayennepassword[] = '+value_cayenne_passowrd+';\n'+
          'char CayenneclientID[] = '+value_cayenne_clientid+';';
  }
    
  
  var code = 'Cayenne.begin(Cayenneusername, Cayennepassword, CayenneclientID);\n';
  //code += checkbox_debug_state;
  return code;
};

Blockly.Arduino['iot_cayennesend'] = function(block) {
  var value_cay_value = Blockly.Arduino.valueToCode(block, 'cay_value', Blockly.Arduino.ORDER_ATOMIC);
  var value_cay_channel = Blockly.Arduino.valueToCode(block, 'cay_Channel', Blockly.Arduino.ORDER_ATOMIC);

  // TODO: Assemble JavaScript into code variable.
  var code = 'Cayenne.virtualWrite('+value_cay_channel+','+value_cay_value+');\n';
  return code;
};

Blockly.Arduino['iot_cayenneupdate'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'Cayenne.loop();\n';
  return code;
};

Blockly.Arduino['iot_cayennegetvalue'] = function(block) {
  var value_caychannel = Blockly.Arduino.valueToCode(block, 'CayChannel', Blockly.Arduino.ORDER_ATOMIC);
  var value_mystring = Blockly.Arduino.valueToCode(block, 'myString', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.definitions_['CAYENNE_IN'+value_caychannel] = 'CAYENNE_IN('+value_caychannel+')\n'+
          '{\n'+value_mystring+' = getValue.asString();\n}\n'
  
  var code = '\n';
  return code;
};