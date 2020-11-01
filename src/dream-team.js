const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members) || members.length === 0) return false;
  let j = 0, letter = [];
  for (let i = 0; i < members.length; i++) {
    if (memberLetter(members[i])) {
      letter[j] = memberLetter(members[i]);
      j++;
    }
  }
  let letterSorted = sort(letter), l = '';
  for (let i = 0; i < letterSorted.length; i++) l += letterSorted[i];
  return(l);
};

function memberLetter(str) {
  if (typeof str !== 'string' || str === '') return false;
  let l = '', k = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') k++;
    else {l = str[i]; break};
  }
  if (k === str.length) return false;
  
  if (l.toUpperCase() !== l) l = l.toUpperCase();
  return l;
};

function sort(arr) {
  let l = '', a = arr;
  for (let k = 0; k < arr.length - 1; k++) {
    for (let c = k + 1; c < arr.length; c++) {
      if (a[k].charCodeAt() > a[c].charCodeAt()) {
        l = a[k];
        a[k] = a[c];
        a[c] = l;
      }
    }
  }
  return a;
};