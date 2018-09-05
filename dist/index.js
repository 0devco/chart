'use strict';

function Collection(collection) {
  console.log(collection);
}

Collection.prototype.setup = require('./setup');
var chart = function collect(collection) {
  return new Collection(collection);
};

module.exports = chart;
module.exports.default = chart;