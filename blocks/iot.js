/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Colour blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.iot');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.iot.HUE = 115;



Blockly.Blocks['iots_connectnetwork_pass'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_ConnectNetwork);
    this.appendValueInput("ssid")
        .setCheck("String")
        .appendField(Blockly.Msg.IOT_ssid);
    this.appendValueInput("password")
        .setCheck("String")
        .appendField(Blockly.Msg.IOT_password);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['iots_connectnetwork_nopass'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_ConnectNetwork);
    this.appendValueInput("ssid")
        .setCheck("String")
        .appendField(Blockly.Msg.IOT_ssid);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};



Blockly.Blocks['iots_staticip'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_static_ip);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_IP)
        .appendField(new Blockly.FieldTextInput("192,168,1,10"), "IP");
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_gateway)
        .appendField(new Blockly.FieldTextInput("192,168,1,1"), "gateway");
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_masque)
        .appendField(new Blockly.FieldTextInput("255,255,255,0"), "masque");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['iots_reconnect'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_Stationreconnect);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['iots_disconnect'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_StationDisconnect);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['iots_isconnected'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_Isconnected);
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['iot_newclientserver'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_NewClientConnection);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['iots_showmac'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_ShowMac);
    this.setOutput(true, "String");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['iot_startserver'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_StartServer);
    this.appendValueInput("port")
        .setCheck("Number")
        .appendField(Blockly.Msg.IOT_Port);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['iots_localip'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_LocalIP);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['iots_gatewayIP'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_GatewayIP);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['iots_gatewayIP'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_GatewayIP);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['iots_maskIP'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_MaskIP);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['iot_hostname'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_hostname);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['iot_sethostname'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField(Blockly.Msg.IOT_sethostname);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['iot_clientip'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_ClientIp);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['iotServer_readrequest'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_ServerReadRequest);
    this.setOutput(true, "String");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['iot_answer'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendValueInput("iot_answer")
        .appendField(Blockly.Msg.IOT_Answer);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['iot_waitconnection'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_WaitConnecion);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['iot_clientflush'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_ClientFlush);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['iotap_softappass'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_WiFiSoftAP);
    this.appendValueInput("SSID")
        .setCheck("String")
        .appendField(Blockly.Msg.IOT_ssid);
    this.appendValueInput("PASSWORD")
        .setCheck("String")
        .appendField(Blockly.Msg.IOT_password);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://easycoding.tn/index.php/nodemcu/tuniot-documentation/iot/');
  }
};

Blockly.Blocks['iotap_softapnopass'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_WiFiSoftAP);
    this.appendValueInput("SSID")
        .setCheck("String")
        .appendField(Blockly.Msg.IOT_ssid);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://easycoding.tn/index.php/nodemcu/tuniot-documentation/iot/');
  }
};

Blockly.Blocks['iotap_staticconfig'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_softAPConfigIP);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_IP)
        .appendField(new Blockly.FieldTextInput("10,10,10,10"), "IP");
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_gateway)
        .appendField(new Blockly.FieldTextInput("10,10,10,1"), "gateway");
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_masque)
        .appendField(new Blockly.FieldTextInput("255,0,0,0"), "masque");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://easycoding.tn/index.php/nodemcu/tuniot-documentation/iot/');
  }
};

Blockly.Blocks['iotap_softapip'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_LocalSoftApIp);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://easycoding.tn/index.php/nodemcu/tuniot-documentation/iot/');
  }
};

Blockly.Blocks['iotap__numstation'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_StationNumber);
    this.setOutput(true, "Number");
    this.setTooltip('');
    this.setHelpUrl('http://easycoding.tn/index.php/nodemcu/tuniot-documentation/iot/');
  }
};

Blockly.Blocks['iotClient_httpbegin'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_SendRequest);
    this.appendDummyInput()
        .appendField("HTTP://");
    this.appendValueInput("ip")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("/");
    this.appendValueInput("message")
        .setCheck(null)
        .appendField("");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['iotclient_sendrequestwithanswer'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_SendRequestWithAnswer);
    this.appendValueInput("ip")
        .setCheck(null)
        .appendField("HTTP://");
    this.appendValueInput("message")
        .setCheck(null)
        .appendField("/");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['iotc_sendthingspeak'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_SendToThingspeak);
    this.appendValueInput("ts_key")
        .setCheck("String")
        .appendField(Blockly.Msg.IOT_Key);
    this.appendValueInput("ts_field")
        .setCheck("String")
        .appendField(Blockly.Msg.IOT_Field);
    this.appendValueInput("ts_value")
        .appendField(Blockly.Msg.IOT_value);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['iotClient_readrequest'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_ServerReadRequest);
    this.setOutput(true, "String");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['iotc_connectweb'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_Connect);
    this.appendValueInput("Web_site")
        .setCheck("String")
        .appendField(Blockly.Msg.IOT_WebSite);
    this.appendValueInput("Web_Port")
        .setCheck("Number")
        .appendField(Blockly.Msg.IOT_Port);
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['iotc_sendtweet'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_SendTweet);
    this.appendValueInput("ts_key")
        .setCheck("String")
        .appendField(Blockly.Msg.IOT_Key);
    this.appendValueInput("ts_tweet")
        .setCheck("String")
        .appendField(Blockly.Msg.IOT_Tweet);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['iotc_ifttt'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_IFTTT);
    this.appendValueInput("key")
        .setCheck(null)
        .appendField(Blockly.Msg.IOT_Key);
    this.appendValueInput("event")
        .setCheck(null)
        .appendField(Blockly.Msg.IOT_Event);
    this.appendValueInput("value1")
        .setCheck(null)
        .appendField(Blockly.Msg.IOT_Value1);
    this.appendValueInput("value2")
        .setCheck(null)
        .appendField(Blockly.Msg.IOT_Value2);
    this.appendValueInput("value3")
        .setCheck(null)
        .appendField(Blockly.Msg.IOT_Value3);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['thingspeak_readfield_priv'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_readfieldpriv);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Int", "Int"], ["Float", "Float"], ["Long", "Long"], ["String", "String"]]), "read_type");
    this.appendValueInput("chanNum")
        .setCheck(null)
        .appendField(Blockly.Msg.IOT_ChannelNumber);
    this.appendValueInput("fieldnum")
        .setCheck(null)
        .appendField(Blockly.Msg.IOT_FieldNumber);
    this.appendValueInput("Apik")
        .setCheck("String")
        .appendField(Blockly.Msg.IOT_apikey);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['thingspeak_readfield_public'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_readfieldpub);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Int", "Int"], ["Float", "Float"], ["Long", "Long"], ["String", "String"]]), "read_type");
    this.appendValueInput("chanNum")
        .setCheck(null)
        .appendField(Blockly.Msg.IOT_ChannelNumber);
    this.appendValueInput("fieldnum")
        .setCheck(null)
        .appendField(Blockly.Msg.IOT_FieldNumber);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['ntp_ntpunix'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_Time);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.IOT_UnixTime,"unixtime"], [Blockly.Msg.IOT_NTP_Time,"ntptime"]]), "NAME");
    this.appendValueInput("ntp_server")
        .setCheck("String")
        .appendField(Blockly.Msg.IOT_server);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://easycoding.tn/index.php/nodemcu/tuniot-documentation/time/');
  }
};

Blockly.Blocks['time_utc'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_utc);
    this.appendValueInput("ntp_server")
        .setCheck(null)
        .appendField(Blockly.Msg.IOT_server);
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://easycoding.tn/index.php/nodemcu/tuniot-documentation/time/');
  }
};

Blockly.Blocks['time_hms'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_utc);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.IOT_Hour,"hour"], [Blockly.Msg.IOT_Minutes,"minute"], [Blockly.Msg.IOT_Second,"second"]]), "choix");
    this.appendValueInput("time_server")
        .setCheck(null)
        .appendField(Blockly.Msg.IOT_server);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://easycoding.tn/index.php/nodemcu/tuniot-documentation/time/');
  }
};

Blockly.Blocks['webpage_html2'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendStatementInput("page_head")
        .setCheck(null);
    this.appendStatementInput("page_body")
        .setCheck(null);
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['webpage_html'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_AnswerWebpage);
    this.appendStatementInput("page_head")
         .appendField(Blockly.Msg.IOT_head)
        .setCheck(null);
    this.appendStatementInput("page_body")
        .appendField(Blockly.Msg.IOT_body)
        .setCheck(null);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['webpage_generic'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendValueInput("generic_html")
        .setCheck(null)
        .appendField(Blockly.Msg.IOT_webpage)
        .appendField(Blockly.Msg.IOT_html);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['html_heading'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_Heading);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["1","h1"], ["2","h2"], ["3","h3"], ["4","h4"], ["5","h5"], ["6","h6"]]), "heading");
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_Color)
        .appendField(new Blockly.FieldColour("#ffcc00"), "NAME");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField(Blockly.Msg.IOT_Text);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['iots_clientavailable'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_ClientAvailable);
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['webpage_span'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_SPAN);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_Color)
        .appendField(new Blockly.FieldColour("#ff0000"), "color");
    this.appendValueInput("fon_size")
        .setCheck("Number")
        .appendField(Blockly.Msg.IOT_FontSize);
    this.appendValueInput("fon_texte")
        .setCheck(null)
        .appendField(Blockly.Msg.IOT_Text);
    this.setInputsInline(true);
        this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['webpage_br'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_NewLine);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ipt_pingip'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_PingIp);
    this.appendValueInput("ip_a")
        .setCheck("Number");
    this.appendValueInput("ip_b")
        .setCheck("Number")
        .appendField(".");
    this.appendValueInput("ip_c")
        .setCheck("Number")
        .appendField(".");
    this.appendValueInput("ip_d")
        .setCheck("Number")
        .appendField(".");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('');
    this.setHelpUrl('http://easycoding.tn/index.php/nodemcu/tuniot-documentation/iot/');
  }
};

Blockly.Blocks['iot_pingweb'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_PingRomoteHost);
    this.appendValueInput("NAME")
        .setCheck("String");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('');
    this.setHelpUrl('http://easycoding.tn/index.php/nodemcu/tuniot-documentation/iot/');
  }
};

Blockly.Blocks['iot_scannetworks'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_ScanWifiNetwork);
    this.setOutput(true, "Number");
    this.setTooltip('');
    this.setHelpUrl('http://easycoding.tn/index.php/nodemcu/tuniot-documentation/iot/scan-class/');
  }
};

Blockly.Blocks['iot_scandelete'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_ScanDelete);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://easycoding.tn/index.php/nodemcu/tuniot-documentation/iot/scan-class/');
  }
};

Blockly.Blocks['iot_wifissid'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendValueInput("ssid")
        .setCheck("Number")
        .appendField(Blockly.Msg.IOT_WifiSsid);
    this.setOutput(true, "String");
    this.setTooltip('');
    this.setHelpUrl('http://easycoding.tn/index.php/nodemcu/tuniot-documentation/iot/scan-class/');
  }
};

Blockly.Blocks['iot_encryptiontype'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendValueInput("ssid")
        .setCheck(null)
        .appendField(Blockly.Msg.IOT_Ssid);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_EncryptionType)
        .appendField(new Blockly.FieldDropdown([["WEP","ENC_TYPE_WEP"], ["WPA / PSK","ENC_TYPE_TKIP"], ["WPA2 / PSK","ENC_TYPE_CCMP"], ["open network","ENC_TYPE_NONE"], ["WPA / WPA2 / PSK","ENC_TYPE_AUTO"]]), "enc_type");
    this.setOutput(true, "Boolean");
    this.setTooltip('');
    this.setHelpUrl('http://easycoding.tn/index.php/nodemcu/tuniot-documentation/iot/scan-class/');
  }
};

Blockly.Blocks['iot_wifirssi'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendValueInput("rssi")
        .setCheck("Number")
        .appendField(Blockly.Msg.IOT_WifiRssi);
    this.setOutput(true, "String");
    this.setTooltip('');
    this.setHelpUrl('http://easycoding.tn/index.php/nodemcu/tuniot-documentation/iot/scan-class/');
  }
};

Blockly.Blocks['webpage_button'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_WifiButton);
    this.appendValueInput("link")
        .setCheck(null)
        .appendField("Href /");
    this.appendValueInput("title")
        .setCheck(null)
        .appendField(Blockly.Msg.IOT_ButtonTitle);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['iot_adafruit_mqtt_setup'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_Adafruit_MQTT_Setup);
    this.appendValueInput("user_name")
        .setCheck(null)
        .appendField(Blockly.Msg.IOT_UserName);
    this.appendValueInput("key")
        .setCheck(null)
        .appendField(Blockly.Msg.IOT_Key);
    this.appendValueInput("Port")
        .setCheck(null)
        .appendField(Blockly.Msg.IOT_Port);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['iot_adafruit_isconnected'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_MqttIsConnected);
    this.setOutput(true, "Boolean");
 this.setTooltip("Return a boolean: True is it is connected to the io.adafruit.com site. Otherwise, it will be false");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['iot_adafruit_publish'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_MqttPublish);
    this.appendValueInput("feed_name")
        .setCheck(null)
        .appendField(Blockly.Msg.IOT_FeedName);
    this.appendValueInput("feed_data")
        .setCheck(null)
        .appendField(Blockly.Msg.IOT_Data);
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
 this.setTooltip("Return a boolean: True is the feed was sent properly, False other wise");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['iot_adafruit_setup_feed'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField(Blockly.Msg.IOT_SubscribeForFeed);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['iot_adafruit_wait_subscription'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField(Blockly.Msg.IOT_WaitForSubscription);
    this.appendStatementInput("mystatement")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['iot_adafruit_sub_equal_feed'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendValueInput("V1")
        .setCheck(null)
        .appendField(Blockly.Msg.IOT_Subscription);
    this.appendDummyInput()
        .appendField("=");
    this.appendValueInput("V2")
        .setCheck(null)
        .appendField(Blockly.Msg.IOT_Feed);
    this.setOutput(true, "Boolean");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['iot_adafruit_lastread'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("")
        .appendField(Blockly.Msg.IOT_FeedReadLastValue);
    this.setOutput(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['watch_dog'] = {
  init: function() {
    this.setColour(80);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_FeedWatchDog);
    this.appendValueInput("mycounter")
        .setCheck("Number");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setInputsInline(true);
 this.setHelpUrl("");
  }
};

Blockly.Blocks['webservice_writefirebase'] = {
  init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField("Firebase: Write");
    this.appendValueInput("key")
        .setCheck("String")
        .appendField("Server Key");
    this.appendValueInput("reg_id")
        .setCheck(null)
        .appendField("Client registration ID");
    this.appendValueInput("message")
        .setCheck(null)
        .appendField("Message");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};















//DELL
Blockly.Blocks['block_a'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("TUNIOT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['block_b'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("FOR");
    this.setOutput(true, null);
    this.setColour(75);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['block_c'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ESP8266");
    this.setOutput(true, null);
    this.setColour(165);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['iot_wunderground_conditions'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Wunderground: Weather conditions");
    this.appendDummyInput()
        .appendField("Json object")
        .appendField(new Blockly.FieldTextInput("weatherconditions"), "wcon");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Key");
    this.appendValueInput("city_name")
        .setCheck(null)
        .appendField("City");
    this.appendDummyInput()
        .appendField("Current observation")
        .appendField(new Blockly.FieldDropdown([["Temperature (C°)","temp_c"], ["Temperature (F°)","temp_f"], ["Relative humidity","relative_humidity"], ["Wind direction","wind_dir"]]), "NAME");
    this.setOutput(true, "String");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['iot_timev2'] = {
  init: function() {
    this.setColour(115);
    this.appendDummyInput()
        .appendField(Blockly.Msg.IOT_TIME_Time);
    this.appendValueInput("time_server")
        .setCheck(null)
        .appendField(Blockly.Msg.IOT_TIME_TimeServer);
    this.appendValueInput("time_zone")
        .setCheck("Number")
        .appendField(Blockly.Msg.IOT_TIME_TimeZone);
    this.appendDummyInput()
        .appendField(Blockly.Msg.INOUT_VALUE)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.IOT_Second,"s"], [Blockly.Msg.IOT_Minutes,"m"], [Blockly.Msg.IOT_Hour,"h"], [Blockly.Msg.IOT_TIME_Day,"j"], [Blockly.Msg.IOT_TIME_Month,"n"], [Blockly.Msg.IOT_TIME_Year,"y"]]), "Choix");
    this.setInputsInline(false);
    this.setOutput(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['iot_deepsleep'] = {
  init: function() {
    this.appendValueInput("time_ds")
        .setCheck("Number")
        .appendField("Deep sleep:");
    this.appendDummyInput()
        .appendField("Seconds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
 this.setColour(260);
  }
};

Blockly.Blocks['iot_cayennesetup'] = {
  init: function() {
    this.setColour(115);
    this.appendDummyInput()
        .appendField("CAYENNE connect");
    this.appendValueInput("Cayenne_UserName")
        .setCheck("String")
        .appendField("User name:");
    this.appendValueInput("Cayenne_Passowrd")
        .setCheck("String")
        .appendField("Password:");
    this.appendValueInput("Cayenne_clientID")
        .setCheck("String")
        .appendField("Client Id:");
this.appendDummyInput()
        .appendField("Debug mode")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "debug_state");
   this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['iot_cayennesend'] = {
  init: function() {
    this.setColour(115);
    this.appendValueInput("cay_value")
        .setCheck("Number")
        .appendField("Send to Cayenne")
        .appendField("Value");
    this.appendValueInput("cay_Channel")
        .setCheck("Number")
        .appendField("Channel");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['iot_cayenneupdate'] = {
  init: function() {
    this.setColour(115);
    this.appendDummyInput()
        .appendField("Cayenne: Update data");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['iot_cayennegetvalue'] = {
  init: function() {
    this.setColour(115);
    this.appendDummyInput()
        .appendField("Cayenne: Get value");
    this.appendValueInput("CayChannel")
        .setCheck("Number")
        .appendField("Channel");
    this.appendValueInput("myString")
        .setCheck("String")
        .appendField("String variable");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};