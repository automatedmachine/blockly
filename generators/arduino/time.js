goog.provide('Blockly.Blocks.time');

goog.require('Blockly.Blocks');

Blockly.Arduino['singleshot_timer'] = function (block){
    var index = Blockly.Arduino.valueToCode(this, 'index', Blockly.Arduino.ORDER_ATOMIC);
    var timerLength = Blockly.Arduino.valueToCode(this, 'timerLength', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'SingleShotTimer(' + index + ',' + timerLength + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['singleshot_reset'] = function (block){
    var index = Blockly.Arduino.valueToCode(this, 'index', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'SingleShotReset(' + index + ');';
    return code;
};

Blockly.Arduino['singleshot_arraysize'] = function (block){
    var arraysize = Blockly.Arduino.valueToCode(this, 'arraysize', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['singleshot_setups'] = 'timerTick.attach(0.1,SingleShotUpdate);';
    Blockly.Arduino.definitions_['define_Ticker'] = '#include <Ticker.h>';
    Blockly.Arduino.definitions_['singleshot_definitions1'] = 
        '#define TIMERARRAY_LENGTH ' + arraysize + '\n'+
        '#define TIMER_IDLE 0\n'+
        '#define TIMER_ACTIVE 1\n'+
        'Ticker timerTick;\n'+
        'long timerElapsed[TIMERARRAY_LENGTH];\n'+
        'long timerStartedAt[TIMERARRAY_LENGTH];\n'+
        'int timerStatus[TIMERARRAY_LENGTH];\n'+
        '\n';
    Blockly.Arduino.definitions_['singleshot_definitions2'] = 
        'void SingleShotUpdate() {\n'+
        '  long now = millis();\n'+
        '  for (int i=0; i<TIMERARRAY_LENGTH; i++)\n'+
        '  {\n'+
        '    if (timerStatus[i] = TIMER_ACTIVE) {\n'+
        '      //Get the elapsed duration by comparing current millis() to start millis()\n'+
        '      timerElapsed[i] = now - timerStartedAt[i];\n'+
        '    }\n'+
        '  }\n'+
        '}\n'+
        '\n'+
        'void SingleShotReset(int index){\n'+
        '  //marking timerStatus as idle is sufficient to reset the timer. It will be reinitialised next time SingleShotTimer is called.\n'+
        '  timerStatus[index] = TIMER_IDLE;\n'+
        '}\n'+
        '\n';
    Blockly.Arduino.definitions_['singleshot_definitions3'] = 
        'int SingleShotTimer(int index, float timerLength) {\n'+
        '  if (timerStatus[index] != TIMER_ACTIVE) {\n'+
        '    // timer was not active, initialize timer and save start time. values will be updated in TimerUpdate()\n'+
        '    timerStartedAt[index] = millis();\n'+
        '    timerStatus[index] = TIMER_ACTIVE;\n'+
        '  }\n'+
        '  long t = timerLength * 1000; // convert floating point Seconds to long Milliseconds\n'+
        '  if (timerElapsed[index] >= t) {\n'+
        '    // timer is done. return 1 for complete\n'+
        '    return 1;\n'+
        '  } else {\n'+
        '    // return 0 as incomplete\n'+
        '    return 0;\n'+
        '  }\n'+
        '}\n';
};

Blockly.Arduino['garbage1'] = function (block) {
    var dropdown_pin = block.getFieldValue('PIN');
    var value = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    // TODO: Assemble JavaScript into code variable.
    var code = 'tone(' + dropdown_pin + ',' + value + ');\n';
    return code;
};

Blockly.Arduino['garbage12'] = function (block) {
    var dropdown_pin = block.getFieldValue('PIN');
    var value = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
    var duration = Blockly.Arduino.valueToCode(this, 'DUR', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    // TODO: Assemble JavaScript into code variable.
    var code = 'tone(' + dropdown_pin + ',' + value + ',' + duration + ');\n';
    return code;
};

Blockly.Arduino['garbage13'] = function (block) {
    var dropdown_pin = block.getFieldValue('PIN');
    // TODO: Assemble JavaScript into code variable.
    var code = 'noTone(' + dropdown_pin + ');\n';
    return code;
};

Blockly.Arduino['garbage14'] = function (block) {
    var dropdown_pin = this.getFieldValue('PIN');
    var dropdown_stat = this.getFieldValue('STAT');

    Blockly.Arduino.setups_['setup_input_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', INPUT);';
    var code = 'pulseIn(' + dropdown_pin + ',' + dropdown_stat + ');';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['garbage15'] = function (block) {
    var statements_setup = Blockly.Arduino.statementToCode(block, 'MySetup');
    var statements_loop = Blockly.Arduino.statementToCode(block, 'MyLoop');

    Blockly.Arduino.setups_['setup'] = statements_setup;

    var code = statements_loop;
    return code;
};

Blockly.Arduino['garbage16'] = function (block) {
    var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);

    Blockly.Arduino.definitions_['define_EEPROM'] = '#include <EEPROM.h>\n';
    // TODO: Assemble JavaScript into code variable.
    var code = 'EEPROM.begin(' + value_name + ');\n';
    return code;
};
