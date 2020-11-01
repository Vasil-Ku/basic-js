const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct,
    this.alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }

  encrypt(string, key) {
    this.check(string, key);
    let str = string.toUpperCase(),
        k = key.toUpperCase(),
        j = 0,
        c = '';
    for (let i = 0; i < str.length; i++) {
      if (this.alpha.includes(str[i])) {
        c += String.fromCharCode((str[i].charCodeAt(0) + k[j].charCodeAt(0) - 130) % 26 + 65);
        if (j === k.length - 1) j = 0;
        else j++;
      }
      else c += str[i];
    }
    if (!this.direct) c = this.reverseString(c);
    return c;
  }
  
  decrypt(string, key) {
    this.check(string, key);
    let str = string.toUpperCase(),
        k = key.toUpperCase(),
        j = 0,
        c = '';
    for (let i = 0; i < str.length; i++) {
      if (this.alpha.includes(str[i])) {
        c += String.fromCharCode((str[i].charCodeAt(0) + 26 - k[j].charCodeAt(0)) % 26 + 65);
        if (j === k.length - 1) j = 0;
        else j++;
      }
      else c += str[i];
    }
    if (!this.direct) c = this.reverseString(c);
    return c;
  }

  reverseString(str) {
    return str.split('').reverse().join('');
  }

  check (string, key) {
    if (string === undefined || key === undefined) Error;
  }
}

module.exports = VigenereCipheringMachine;

/*const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);

alert(directMachine.encrypt('n', 'l'))*/
