'use strict'

var urlParse = require('url').parse

module.exports = function(url) {
  var protocol = urlParse(url).protocol
  return protocol === 'http:' || protocol === 'https:'
}
