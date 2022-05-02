const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
   //throw new NotImplementedError('Not implemented');
   let result = str;
   let resultTwo = "";
   let repeatSrt =
      typeof options.repeatTimes === "number" ? options.repeatTimes : 1;
   let separatorValue =
      typeof options.separator !== "undefined" ? options.separator : "+";
   let additionValue =
      typeof options.addition !== "undefined" ? options.addition : "";
   let additionRepeatTimeValue =
      typeof options.additionRepeatTimes === "number"
         ? options.additionRepeatTimes
         : 1;
   let additionSeparator =
      typeof options.additionSeparator !== "undefined"
         ? options.additionSeparator
         : '|';
   ;
   for (let i = 0; i < additionRepeatTimeValue; i++) {
      if (additionRepeatTimeValue - i !== 1) {
         result += `${additionValue}${additionSeparator}`;
      } else {
         result += `${additionValue}`;
      }
   }
   for (let j = 0; j < repeatSrt; j++) {
      if (repeatSrt - j !== 1) {
         resultTwo += result + separatorValue;
      } else {
         resultTwo += result;
      }
   }
   //console.log(('STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS')==(resultTwo));

   return resultTwo;
}

module.exports = {
   repeater
};
