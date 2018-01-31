/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * http://blockly.googlecode.com/
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
 * @fileoverview Generating Arduino for text blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */
'use strict';

goog.provide('Blockly.Arduino.texts');

goog.require('Blockly.Arduino');


Blockly.Arduino.text = function() {
  // Text value.
  var code = Blockly.Arduino.quote_(this.getFieldValue('TEXT'));
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.text_char = function() {
  // Text value.
  var code = Blockly.Arduino.simplequote_(this.getFieldValue('TEXT'));
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['ParserJoinArray'] = function(block) {
  // Create a string made up of any number of elements of any type.
  var value_jsonobject = Blockly.Arduino.valueToCode(block, 'JsonObject', Blockly.Arduino.ORDER_ATOMIC);
  var text_name = block.getFieldValue('NAME');
  
  switch (block.itemCount_) {
    case 0:
      return [text_name+'['+ value_jsonobject+'].as<char*>()', Blockly.Arduino.ORDER_ATOMIC];
    case 1:
      var element = Blockly.Arduino.valueToCode(block, 'ADD0',
          Blockly.Arduino.ORDER_NONE) || '\'\'';
      var code = text_name+'['+value_jsonobject+']['+element+'].as<char*>()';
      return [code, Blockly.Arduino.ORDER_FUNCTION_CALL];
    case 2:
      var element0 = Blockly.Arduino.valueToCode(block, 'ADD0',
          Blockly.Arduino.ORDER_NONE) || '\'\'';
      var element1 = Blockly.Arduino.valueToCode(block, 'ADD1',
          Blockly.Arduino.ORDER_NONE) || '\'\'';
      //var code = 'String(' + element0 + ') + String(' + element1 + ')';
      var code = text_name+'['+value_jsonobject+']['+element0+']['+element1+'].as<char*>()';
      return [code, Blockly.Arduino.ORDER_ADDITION];
    default:
      var elements = new Array(block.itemCount_);
      for (var i = 0; i < block.itemCount_; i++) {
        elements[i] = Blockly.Arduino.valueToCode(block, 'ADD' + i,
            Blockly.Arduino.ORDER_COMMA) || '\'\'';
      }
      var code = text_name+'['+value_jsonobject+']'+'[' + elements.join('][') + '].as<char*>()';
      return [code, Blockly.Arduino.ORDER_FUNCTION_CALL];
  }
};

Blockly.Arduino['jsonparser_parse'] = function(block) {
  var text_objectname = block.getFieldValue('ObjectName');
  var value_toparse = Blockly.Arduino.valueToCode(block, 'toparse', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.definitions_['define_ArduinoJson'] = '#include <ArduinoJson.h>';
  Blockly.Arduino.definitions_['define_DynamicJsonBuffer'] = 'DynamicJsonBuffer jsonBuffer(3000);'; 
  
  
  // TODO: Assemble JavaScript into code variable.
  var code = 'JsonObject& '+text_objectname+' = jsonBuffer.parseObject('+value_toparse+');\n';
  return code;
};

Blockly.Arduino['jsonparser_result'] = function(block) {
  var text_param_object = block.getFieldValue('param_object');
  
  Blockly.Arduino.definitions_['fonc_parsing_result'] = 'int parsing_result (JsonObject& monparam){\n'+
          'if (!monparam.success())return 0;\n'+
          'else\n'+
          'return 1;\n'+
          '}\n';  
  
  // TODO: Assemble JavaScript into code variable.
  var code = 'parsing_result('+text_param_object+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};