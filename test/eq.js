const assert = require('assert')
const I = require('../dist/cjs')

describe('eq', function() {
  it('eq', function() {
    assert.ok(I.eq(1, 1))
    assert.ok(I.eq(0, 0))
    assert.ok(I.eq('0', '0'))
    assert.ok(I.eq(true, true))
    assert.ok(I.eq(false, false))
    assert.ok(I.eq(null, null))
    assert.ok(I.eq(undefined, undefined))
    const symbol = Symbol()
    assert.ok(I.eq(symbol, symbol))
    assert.ok(I.eq(Infinity, Infinity))
    assert.ok(I.eq(-Infinity, -Infinity))
    assert.ok(I.eq(NaN, NaN))
  })
})
