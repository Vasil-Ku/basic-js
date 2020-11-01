const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeatTimes = options.repeatTimes || 1,
      separator = options.separator || '+',
      addition = repl(options.addition) || '',
      additionRepeatTimes = options.additionRepeatTimes || 1,
      additionSeparator = options.additionSeparator || '|',
      s = str + add(addition, additionSeparator, additionRepeatTimes);
  return add(s, separator, repeatTimes);
};

function add(s,d,n) {
  let str = '';
  if (n === 1) return s;
  for (let i = 1; i < n; i++) {
    str += s + d;
  }
  str += s;
  return str;
} 

function repl(a) {
  if (a === null) return 'null';
  if (a === false) return 'false';
  return a;
}