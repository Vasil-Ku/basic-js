const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || sampleActivity === '') return false;
  let act = parseFloat(sampleActivity);
  if (!act) return false;
  if (act > 15 || act <= 0) return false;
  return parseInt(Math.log(15 / act) * 5730 / 0.693);
};
