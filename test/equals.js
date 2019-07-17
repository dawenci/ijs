const assert = require('assert')
const I = require('../dist/cjs')

describe('equals', function() {
  it('equals', function() {
    assert.ok(I.equals(1, 1))
    assert.ok(I.equals(0, 0))
    assert.ok(I.equals(0, -0))
    assert.ok(I.equals('0', '0'))
    assert.ok(I.equals(true, true))
    assert.ok(I.equals(false, false))
    assert.ok(I.equals(null, null))
    assert.ok(I.equals(undefined, undefined))
    const symbol = Symbol()
    assert.ok(I.equals(symbol, symbol))
    assert.ok(I.equals(Infinity, Infinity))
    assert.ok(I.equals(-Infinity, -Infinity))
    assert.ok(I.equals(NaN, NaN))

    assert.ok(I.equals({}, {}))
    assert.ok(I.equals([], []))
    assert.ok(I.equals(/regexp/gimuy, /regexp/gimuy))
    assert.ok(I.equals(new Date(2018, 12, 24), new Date(2018, 12, 24)))

    assert.ok(I.equals({ x: 1 }, { x: 1 }))
    const obj = {}
    Object.setPrototypeOf(obj, { x: 1 })
    assert.equal(I.equals({ x: 1 }, obj), false)
  })
})
