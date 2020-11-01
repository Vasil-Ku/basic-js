const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
//class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1, depthArr = [];
    for (let i = 0; i < arr.length; i++) {
      depthArr[i] = 1;
      if (Array.isArray(arr[i])) {
        depthArr[i] += this.calculateDepth(arr[i]);;
      }
    }
    for (let i = 0; i < arr.length; i++) {
      if (depth < depthArr[i]) depth = depthArr[i];
    }
    return depth;
  }
};
/*const q = new DepthCalculator;
alert(q.calculateDepth([
  3, 2, [1], [2], 3, [2, [1]]
]));*/