const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) Error;
  let trans = [], k = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next' || arr[i] === '--discard-prev' || arr[i] === '--double-next' || arr[i] === '--double-prev') {
      if(arr[i] === '--discard-next') {
        if (i !== arr.length - 1) {
          i += 1;
        }
      }
      if (arr[i] === '--discard-prev') {
        if (i !== 0 && arr[i-2] !== '--discard-next') {
          k -=1;
          trans.splice(k, 1);
        }
      }
      if (arr[i] === '--double-next') {
        if (i !== arr.length - 1) {
          trans[k] = arr[i+1];
          k++;
        }
      }
      if (arr[i] === '--double-prev' && arr[i-2] !== '--discard-next') {
        if (i !== 0) {
          trans[k] = arr[i-1];
          k++;
        }
      }
    }
    else {
      trans[k] = arr[i];
      k++;
    }
  }
  return trans;
};