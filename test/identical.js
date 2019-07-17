const assert = require('assert')
const I = require('../dist/cjs')

describe('identical', function() {
  it('identical', function() {
    assert.ok(I.identical(1, 1))
    assert.ok(I.identical(0, 0))
    assert.ok(I.identical('0', '0'))
    assert.ok(I.identical(true, true))
    assert.ok(I.identical(false, false))
    assert.ok(I.identical(null, null))
    assert.ok(I.identical(undefined, undefined))
    const symbol = Symbol()
    assert.ok(I.identical(symbol, symbol))
    assert.ok(I.identical(Infinity, Infinity))
    assert.ok(I.identical(-Infinity, -Infinity))
    assert.ok(I.identical(NaN, NaN))

    assert.ok(!I.identical(0, -0))
  })
})
