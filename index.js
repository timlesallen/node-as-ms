var moment = require('moment');

module.exports = function(number, unit) {
  return moment.duration(number, unit).asMilliseconds();
};
