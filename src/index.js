'use strict';

function Collection(collection) {
  console.log(collection)
}


Collection.prototype.setup = require('./setup');
var charts = function collect(collection) {
  return new Collection(collection);
};



module.exports = charts;
module.exports.default = charts;
