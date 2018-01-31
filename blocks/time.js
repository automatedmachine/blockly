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
 * @fileoverview timer blocks for Blockly.
 */
'use strict';

goog.provide('Blockly.Blocks.time');

goog.require('Blockly.Blocks');

/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.time.HUE = 260;

Blockly.Blocks['singleshot_timer'] = {
  init: function() {
    this.appendValueInput("index")
        .setCheck("Number")
        .appendField("1 Shot Timer - Index:");
    this.appendValueInput("timerLength")
        .setCheck("Number")
        .appendField("Duration:");
    this.appendDummyInput()
        .appendField("seconds");
    this.setInputsInline(true);
    this.setOutput(true, ["Number", "Boolean"]);
    this.setColour(Blockly.Blocks.time.HUE);
 this.setTooltip("Simple Timer: This timer will start timing the first time it is called. This block will return 0 if the time hasn't elapsed yet and 1 once it's complete. Won't restart until you use the Timer Reset block. Each instance of the block needs a unique Index Number unless there's no possible way they can run at the same time.");
 this.setHelpUrl("");
  }
};
  
  Blockly.Blocks['singleshot_reset'] = {
    init: function() {
      this.appendValueInput("index")
          .setCheck(null)
          .appendField("1 Shot Timer Reset - Index:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(Blockly.Blocks.time.HUE);
   this.setTooltip("Resets a timing or completed 1 Shot Timer so it can be started over from 0 seconds.");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['singleshot_arraysize'] = {
    init: function() {
      this.appendValueInput("arraysize")
          .setCheck("Number")
          .appendField("1 Shot Timer - Number Of Timers To Create:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(Blockly.Blocks.time.HUE);
   this.setTooltip("This block goes into the Setup section. Sets how many timers can be used by the 1 Shot Timer block.");
   this.setHelpUrl("");
    }
  };