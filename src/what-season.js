const CustomError = require("../extensions/custom-error");
module.exports = function getSeason(date) {
//function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  if (toString.call(date) !== '[object Date]') Error;
  const seasons = ['spring','summer','autumn','winter'];
  let m = date.getMonth();
  if (m >=2 && m <= 4) return seasons[0];
  if (m >= 5 && m <=7) return seasons[1];
  if (m >= 8 && m <=10) return seasons[2];
  if (m = 11 || m <= 1) return seasons[3];
};
/*
const d = {
  toString() {
      return Date.prototype.toString.call(new Date());
  },
  getMonth() {
      return Date.prototype.getMonth.call(new Date());
  },
  getFullYear() {
      return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
  },
  getDate() {
      return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
  },
  getHours() {
      return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
  },
  getMinutes() {
      return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
  },
  getSeconds() {
      return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
  },
  getMilliseconds() {
      return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
  },
  getDay() {
      return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
  }
};
Object.setPrototypeOf(d, Object.getPrototypeOf(new Date()));

alert(getSeason(d));*/
