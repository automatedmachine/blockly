goog.provide('Blockly.Blocks.oled');

goog.require('Blockly.Blocks');


Blockly.Arduino['oled_setup'] = function (block) {
    var adr = block.getFieldValue('NAME');  // TODO: Assemble Arduino into code variable.
    var P1 = block.getFieldValue('P_SCK');
    var P2 = block.getFieldValue('P_SDA');
    Blockly.Arduino.definitions_['define_oled'] = '#include <Wire.h>\n#include "SSD1306.h"\n\nSSD1306  display(' + adr + ', ' + P2 + ', ' + P1 + ');';


    //Blockly.Arduino.definitions_['define_lcdpins'] = 'LiquidCrystal_I2C lcd('+text_name+','+value_columns+','+value_rows+');\n';
    //
    //LiquidCrystal lcd(12, 11, 10, 5, 4, 3, 2);
    //var value_columns = Blocklyx.Arduino.valueToCode(block, 'COLUMNS', Blockly.Arduino.ORDER_ATOMIC);
    //var value_rows = Blockly.Arduino.valueToCode(block, 'ROWS', Blockly.Arduino.ORDER_ATOMIC);
    // TODO: Assemble Arduino into code variable.
    //Blockly.Arduino.setups_['setup_lcd_normal']='lcd.begin('+value_columns+','+ value_rows+');\n'
    Blockly.Arduino.setups_['setup_Oled'] = 'Serial.begin(9600);\ndisplay.init();\n'

    var code = '';
    return code;
};

Blockly.Arduino['oled_print'] = function (block) {
    var value_text = Blockly.Arduino.valueToCode(block, 'text', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_name = block.getFieldValue('FONT');
    var value_x = Blockly.Arduino.valueToCode(block, 'x', Blockly.Arduino.ORDER_ATOMIC);
    var value_y = Blockly.Arduino.valueToCode(block, 'y', Blockly.Arduino.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'display.setTextAlignment(TEXT_ALIGN_LEFT);\n';
    code += 'display.setFont(' + dropdown_name + ');\n';
    code +='display.drawString('+value_x+', '+value_y+', '+value_text+');\n';
    code +='display.display();\n'
    return code;
};


Blockly.Arduino['oled_clear'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'display.clear();\n';
    return code;
};