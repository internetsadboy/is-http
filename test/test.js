'use strict'

var test = require('tape')
  , isHttp = require('../index')

test('http',function(t) {
  t.plan(1)
  t.deepEqual(true, isHttp('http://github.com'))
})

test('https', function(t) {
  t.plan(1)
  t.deepEqual(true, isHttp('https://github.com'))
})

test('not http(s)', function(t) {
  t.plan(1)
  t.deepEqual(false, isHttp('blah://github.com'))
})
