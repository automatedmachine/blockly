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

goog.provide('Blockly.Blocks.divers');

goog.require('Blockly.Blocks');

Blockly.Blocks['grove_temporature_sensor'] = {
    helpUrl: 'http://easycoding.tn/index.php/nodemcu/tuniot-documentation/various/',
    init: function () {
        this.setColour(50);
        this.appendDummyInput()
                .appendField(Blockly.Msg.VAR_TemSens)
                .appendField(Blockly.Msg.PIN)
                .appendField(new Blockly.FieldDropdown(profile.default.analog), "PIN");
        this.setOutput(true, 'Number');
        this.setTooltip('return number of ambient temperature in ℃');
    }
};

Blockly.Blocks['grove_ultrasonic_ranger'] = {
    helpUrl: 'http://easycoding.tn/index.php/nodemcu/tuniot-documentation/various/',
    init: function () {
        this.setColour(50);
        this.appendDummyInput()
                .appendField(Blockly.Msg.ultrasonic_ranger)
                .appendField(Blockly.Msg.TRIG)
                .appendField(new Blockly.FieldDropdown(profile.default.digital_2), "PIN_TRIG")
                .appendField(Blockly.Msg.Echo)
                .appendField(new Blockly.FieldDropdown(profile.default.digital_2), "PIN_ECHO");
//        .appendField(new Blockly.FieldDropdown([["cm", "cm"],  ["inch", "inch"]]), "UNIT");
        this.setOutput(true, 'Number');
        this.setTooltip('Non-contact distance measurement module');
    }
};

Blockly.Blocks['grove_motor_shield'] = {
    helpUrl: 'http://www.seeedstudio.com/wiki/Motor_Shield',
    init: function () {
        this.setColour(20);
        this.appendDummyInput()
                .appendField(Blockly.Msg.VAR_Motor)
                .appendField(new Blockly.FieldDropdown([[Blockly.Msg.Stop, "stop"], [Blockly.Msg.Forward, "forward"], [Blockly.Msg.Right, "right"], [Blockly.Msg.Left, "left"], [Blockly.Msg.Backward, "backward"]]), "DIRECTION");
        /*this.appendValueInput("SPEED", 'Number')
         .setCheck('Number')
         .setAlign(Blockly.ALIGN_RIGHT)
         .appendField("Speed");*/
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Drive two brushed DC motors');
    }
};

Blockly.Blocks['base_delayms'] = {
    helpUrl: 'http://easycoding.tn/index.php/nodemcu/tuniot-documentation/various/',
    init: function () {
        this.setColour(260);
        this.appendValueInput("DELAY_TIME", 'Number')
                .appendField(Blockly.Msg.DelayMs)
                .setCheck('Number');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Delay specific time in Ms');
    }
};

Blockly.Blocks['millis2'] = {
    helpUrl: 'http://easycoding.tn/index.php/nodemcu/tuniot-documentation/various/',
    init: function () {
        this.setColour(150);
        this.appendDummyInput()
                .appendField(Blockly.Msg.SinceProgramStarted);
        this.setOutput(true, 'Number');
        this.setTooltip('Number of milliseconds since the program started (unsigned long)');
    }
};

Blockly.Blocks['millis'] = {
    helpUrl: 'http://easycoding.tn/index.php/nodemcu/tuniot-documentation/various/',
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.SinceProgramStarted)
        .appendField(new Blockly.FieldDropdown([["Millisecond","ms"], ["Second","se"], ["Minute","mn"]]), "unit");
    this.setOutput(true, "Number");
    this.setColour(260);
    this.setTooltip('');
  }
};

Blockly.Blocks['var_random'] = {
    init: function () {
        this.setColour(230);
        this.setHelpUrl('');
        this.appendValueInput("rand_min")
                .setCheck("Number")
                .appendField(Blockly.Msg.RandomBetween);
        this.appendValueInput("rand_max")
                .setCheck("Number")
                .appendField(Blockly.Msg.And);
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip('');
    }
};

Blockly.Blocks['various_constrain'] = {
    init: function () {
        this.setColour(230);
        this.setHelpUrl('http://arduino.cc/en/Reference/Constrain');
        this.appendDummyInput()
                .appendField(Blockly.Msg.Constrain);
        this.appendValueInput("x")
                .setCheck("Number")
                .appendField(Blockly.Msg.Number);
        this.appendValueInput("a")
                .setCheck("Number")
                .appendField(Blockly.Msg.NumberA);
        this.appendValueInput("b")
                .setCheck("Number")
                .appendField(Blockly.Msg.NumberB);
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setTooltip('Constrains a number to be within a range. ');
    }
};

Blockly.Blocks['various_tone2param'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.various_tone);
        this.appendDummyInput()
                .appendField(Blockly.Msg.PIN)
                .appendField(new Blockly.FieldDropdown(profile.default.digital_2), "PIN");
        this.appendValueInput("freq")
                .setCheck("Number")
                .appendField(Blockly.Msg.various_frequency);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip('');
        this.setHelpUrl('http://easycoding.tn/index.php/nodemcu/tuniot-documentation/various/');
    }
};

Blockly.Blocks['various_tone3param'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.various_tone);
        this.appendDummyInput()
                .appendField(Blockly.Msg.PIN)
                .appendField(new Blockly.FieldDropdown(profile.default.digital_2), "PIN");
        this.appendValueInput("freq")
                .setCheck("Number")
                .appendField(Blockly.Msg.various_frequency);
        this.appendValueInput("duration")
                .setCheck("Number")
                .appendField(Blockly.Msg.Duration);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip('');
        this.setHelpUrl('http://easycoding.tn/index.php/nodemcu/tuniot-documentation/various/');
    }
};

Blockly.Blocks['various_notone'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.various_notone);
        this.appendDummyInput()
                .appendField(Blockly.Msg.PIN)
                .appendField(new Blockly.FieldDropdown(profile.default.digital_2), "PIN");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip('');
        this.setHelpUrl('http://easycoding.tn/index.php/nodemcu/tuniot-documentation/various/');
    }
};

//SNAP Arduino
Blockly.Blocks['s4a_broadcastmessage'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("S4A Broadcast message");
    this.appendValueInput("server_ip")
        .setCheck("String")
        .appendField("Server IP");
    this.appendValueInput("server_message")
        .setCheck("String")
        .appendField("Message");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['s4a_updatevar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("S4A Update variable");
    this.appendValueInput("server_ip")
        .setCheck("String")
        .appendField("Server IP");
    this.appendValueInput("var_name")
        .setCheck("String")
        .appendField("Variable name");
    this.appendValueInput("var_value")
        .setCheck("String")
        .appendField("Value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['s4a_listenedmessage'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("S4A listened message");
    this.appendValueInput("server_ip")
        .setCheck("String")
        .appendField("Server IP");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['various_dht_temperature_sensor'] = {
  helpUrl: 'http://easycoding.tn/index.php/nodemcu/tuniot-documentation/various/',
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.DHT);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly
        .FieldDropdown(profile.default.digital_2), "PIN");
    this.appendDummyInput()
        .appendField(Blockly.Msg.TypeDHT)
        .appendField(new Blockly.FieldDropdown([["11","DHT11"], ["21","DHT21"], ["22","DHT22"]]), "sensor_type");
    this.appendDummyInput()
        .appendField(Blockly.Msg.UnitOfMeasure)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.Celsus," "], [Blockly.Msg.Fahrenheit,"true"]]), "unity");
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setColour(50);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['various_dht_humidity_sensor'] = {
  helpUrl: 'http://easycoding.tn/index.php/nodemcu/tuniot-documentation/various/',
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.DHT_Humidity);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital_2), "PIN");
    this.appendDummyInput()
        .appendField(Blockly.Msg.TypeDHT)
        .appendField(new Blockly.FieldDropdown([["11","DHT11"], ["21","DHT21"], ["22","DHT22"]]), "sensor_type");
    this.appendDummyInput()
        .appendField(Blockly.Msg.UnitOfMeasure)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.Celsus," "], [Blockly.Msg.Fahrenheit,"true"]]), "unity");
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setColour(50);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};