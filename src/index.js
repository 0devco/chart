'use strict';

function Collection(collection) {
  if(collection !== undefined){
    console.log(collection)
  }
  console.log('@0devco/chart loaded');
}

Collection.prototype.setup = require('./setup');
var chart = function collect(collection) {
  return new Collection(collection);
};

module.exports = chart;
module.exports.default = chart;
