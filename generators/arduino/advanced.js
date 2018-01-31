goog.provide('Blockly.Blocks.divers');

goog.require('Blockly.Blocks');


Blockly.Arduino['advanced_tone'] = function (block) {
    var dropdown_pin = block.getFieldValue('PIN');
    var value = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    // TODO: Assemble JavaScript into code variable.
    var code = 'tone(' + dropdown_pin + ',' + value + ');\n';
    return code;
};

Blockly.Arduino['advanced_tonedure'] = function (block) {
    var dropdown_pin = block.getFieldValue('PIN');
    var value = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
    var duration = Blockly.Arduino.valueToCode(this, 'DUR', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    // TODO: Assemble JavaScript into code variable.
    var code = 'tone(' + dropdown_pin + ',' + value + ',' + duration + ');\n';
    return code;
};

Blockly.Arduino['advanced_notone'] = function (block) {
    var dropdown_pin = block.getFieldValue('PIN');
    // TODO: Assemble JavaScript into code variable.
    var code = 'noTone(' + dropdown_pin + ');\n';
    return code;
};

Blockly.Arduino['advanced_pulsein'] = function (block) {
    var dropdown_pin = this.getFieldValue('PIN');
    var dropdown_stat = this.getFieldValue('STAT');

    Blockly.Arduino.setups_['setup_input_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', INPUT);';
    var code = 'pulseIn(' + dropdown_pin + ',' + dropdown_stat + ');';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['arduino_setup'] = function (block) {
    var statements_setup = Blockly.Arduino.statementToCode(block, 'MySetup');
    var statements_loop = Blockly.Arduino.statementToCode(block, 'MyLoop');

    Blockly.Arduino.setups_['setup'] = statements_setup;

    var code = statements_loop;
    return code;
};

Blockly.Arduino['eeprom_begin'] = function (block) {
    var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);

    Blockly.Arduino.definitions_['define_EEPROM'] = '#include <EEPROM.h>\n';
    // TODO: Assemble JavaScript into code variable.
    var code = 'EEPROM.begin(' + value_name + ');\n';
    return code;
};

Blockly.Arduino['eeprom_write'] = function (block) {
    var value_ee_byte = Blockly.Arduino.valueToCode(block, 'EE_Byte', Blockly.Arduino.ORDER_ATOMIC);
    var value_ee_value = Blockly.Arduino.valueToCode(block, 'EE_value', Blockly.Arduino.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'EEPROM.write(' + value_ee_byte + ', ' + value_ee_value + ');\n';
    return code;
};

Blockly.Arduino['eeprom_read'] = function (block) {
    var value_ee_byte = Blockly.Arduino.valueToCode(block, 'EE_Byte', Blockly.Arduino.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'EEPROM.read(' + value_ee_byte + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['interrupts_attach'] = function (block) {
    var a = this.getFieldValue("PIN"), b = this.getFieldValue("MODE"), c = Blockly.Arduino.statementToCode(this, "CONTENT");
    Blockly.Arduino.setups_["setup_interrupt_" + a] = "attachInterrupt(" + a + ",interrupt_" + a + "," + b + ");";
    Blockly.Arduino.definitions_["define_interrupt_" + a] = "void interrupt_" + a + "(){\n" + c + "}\n";
    return""
};
Blockly.Arduino.interrupts_detach = function () {
    return"detachInterrupt(" + this.getFieldValue("PIN") + ");\n"
};
Blockly.Arduino.interrupts = function () {
    return"interrupts();\n"
};

Blockly.Arduino.interrupts_no = function () {
    return"noInterrupts();\n"
};

Blockly.Arduino['arduino_code'] = function(block) {
    var text_code = block.getFieldValue('code');
    // TODO: Assemble JavaScript into code variable.
    var code = text_code;
    return code+"\n";
};

Blockly.Arduino['arduino_definition'] = function(block) {
    var text_code = block.getFieldValue('code');
    // TODO: Assemble JavaScript into code variable.
    var code = text_code;
    Blockly.Arduino.definitions_['variables' + code] = code;
    return '';
};