const assert = require('assert')
const I = require('../dist/cjs')

describe('is', function() {
  it('is', () => {
    assert.equal(I.is(Object, null), false)
    assert.equal(I.is(Object, undefined), false)

    assert.ok(I.is(Object, {}))
    assert.ok(I.is(Object, []))
    assert.ok(I.is(Object, function(){}))
    assert.ok(I.is(Object, new Number()))
    assert.ok(I.is(Object, new String()))
    assert.ok(I.is(Object, /reg/))
    assert.ok(I.is(Object, new Date()))
    assert.ok(I.is(Object, new Map()))
    assert.ok(I.is(Object, new Set()))

    assert.ok(I.is(Number, 1))
    assert.ok(I.is(Number, new Number()))

    assert.ok(I.is(String, ''))
    assert.ok(I.is(String, new String()))

    assert.ok(I.is(Array, []))
    assert.ok(I.is(Function, function() {}))

    assert.ok(I.is(Date, new Date()))
    assert.ok(I.is(RegExp, /regexp/))
  })
})
