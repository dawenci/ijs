const assert = require('assert')
const I = require('../dist/cjs')

describe('isPrimitive', function() {
  it('isPrimitive', function() {

    assert.ok(!I.isPrimitive(function(){}))
    assert.ok(!I.isPrimitive({}))
    assert.ok(!I.isPrimitive([]))
    assert.ok(!I.isPrimitive(new Number()))
    assert.ok(!I.isPrimitive(new String()))
    assert.ok(!I.isPrimitive(new Boolean()))
    assert.ok(!I.isPrimitive(/reg/))
    assert.ok(!I.isPrimitive(new Date()))

    assert.ok(I.isPrimitive(null))
    assert.ok(I.isPrimitive(undefined))
    assert.ok(I.isPrimitive(1))
    assert.ok(I.isPrimitive(''))
    assert.ok(I.isPrimitive(true))
    assert.ok(I.isPrimitive(false))
    assert.ok(I.isPrimitive(Symbol()))

  })
})
