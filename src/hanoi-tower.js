const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let n = Math.pow(2, disksNumber) - 1,
      m = Math.floor(3600 * n / turnsSpeed);
  let ans = {
    turns: n,
    seconds: m
  };
  return ans;
};