//const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    this += `( ${value} )~~`
    alert(this);
  },
  removeLink(position) {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
};

//module.exports = chainMaker;

alert(chainMaker.addLink('a'));