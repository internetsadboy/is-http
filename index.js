module.exports = function(url) {
  var protocol = require('url').parse(url).protocol
  if(protocol === 'http:') return true
  if(protocol === 'https:') return true
  return false
}
