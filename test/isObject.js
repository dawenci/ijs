const assert = require('assert')
const I = require('../dist/cjs')

describe('isObject', function() {
  it('isObject', function() {

    assert.ok(I.isObject(function(){}))
    assert.ok(I.isObject({}))
    assert.ok(I.isObject([]))
    assert.ok(I.isObject(new Number()))
    assert.ok(I.isObject(new String()))
    assert.ok(I.isObject(new Boolean()))
    assert.ok(I.isObject(/reg/))
    assert.ok(I.isObject(new Date()))

    assert.ok(!I.isObject(null))
    assert.ok(!I.isObject(undefined))
    assert.ok(!I.isObject(1))
    assert.ok(!I.isObject(''))
    assert.ok(!I.isObject(true))
    assert.ok(!I.isObject(false))
    assert.ok(!I.isObject(Symbol()))

  })
})
