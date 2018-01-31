goog.provide('Blockly.Blocks.servo');

goog.require('Blockly.Blocks');
//servo block
//http://www.seeedstudio.com/depot/emax-9g-es08a-high-sensitive-mini-servo-p-760.html?cPath=170_171
Blockly.Blocks['servo_move'] = {
  helpUrl: 'http://easycoding.tn/index.php/nodemcu/tuniot-documentation/various/',
  init: function() {
    this.setColour(20);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVO_Servo)
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.appendValueInput("DEGREE", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.Degree);
    this.appendValueInput("DELAY_TIME", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.Delay);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['servo_read_degrees'] = {
  helpUrl: 'http://easycoding.tn/index.php/nodemcu/tuniot-documentation/various/',
  init: function() {
	this.setColour(20);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVO_Servo)
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVO_ReadDegree);
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};


Blockly.Blocks['servo_attached'] = {
  helpUrl: 'http://easycoding.tn/index.php/nodemcu/tuniot-documentation/various/',
  init: function() {
	this.setColour(20);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVO_Attached)
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setOutput(true, 'Boolean');
    this.setTooltip('');
  }
};

Blockly.Blocks['servo_detach'] = {
  helpUrl: 'http://easycoding.tn/index.php/nodemcu/tuniot-documentation/various/',
  init: function() {
    this.setColour(20);
	this.setInputsInline(true);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVO_Detach)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};