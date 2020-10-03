const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.separator === undefined) options.separator = '+';
  if (options.repeatTimes === undefined) options.repeatTimes = 1;
  if (options.addition === undefined) options.addition = '';
  if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;
  if (options.additionSeparator === undefined) options.additionSeparator = '|';

  var res = ''; 
  str = String(str);
  options.addition = String(options.addition)
  for (var i = 0; i < options.repeatTimes; i++) {
    res += str;
    for (var j = 0; j < options.additionRepeatTimes; j++) {
      res += options.addition;
      if (j < options.additionRepeatTimes - 1)  res += options.additionSeparator;
    }
    if (i <  options.repeatTimes -1 ) res += options.separator;
  }
  return res;
};
  