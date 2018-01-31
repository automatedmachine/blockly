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

goog.provide('Blockly.Blocks.oled');

goog.require('Blockly.Blocks');


Blockly.Blocks['oled_setup'] = {
   init: function() {
    this.setColour(140);
    this.appendDummyInput()
        .appendField("SETUP OLED ADDRESS ");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("0x3F"), "NAME");
    this.appendDummyInput()
         .appendField("SCK")
         .appendField(new Blockly.FieldDropdown(profile.default.digital_2), "P_SCK")
          .appendField("SDA")
         .appendField(new Blockly.FieldDropdown(profile.default.digital_2), "P_SDA");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['oled_print'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck(null)
        .appendField("OLED Print text");
    this.appendDummyInput()
        .appendField("Font")
        .appendField(new Blockly.FieldDropdown([["ArialMT_Plain_10","ArialMT_Plain_10"], ["ArialMT_Plain_16","ArialMT_Plain_16"], ["ArialMT_Plain_24","ArialMT_Plain_24"]]), "FONT");
    this.appendValueInput("x")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.appendValueInput("y")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(140);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['oled_clear'] = {
  init: function() {
    this.setColour(140);
    this.appendDummyInput()
        .appendField("OLED Clear");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};