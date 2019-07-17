const assert = require('assert')
const I = require('../dist/cjs')

describe('eqBy', function() {
  it('eqBy', function() {
    assert.ok(I.eqBy(I.identity, 1, 1))
    assert.ok(I.eqBy(I.identity, 0, 0))
    assert.ok(I.eqBy(I.identity, '0', '0'))
    assert.ok(I.eqBy(I.identity, true, true))
    assert.ok(I.eqBy(I.identity, false, false))
    assert.ok(I.eqBy(I.identity, null, null))
    assert.ok(I.eqBy(I.identity, undefined, undefined))
    const symbol = Symbol()
    assert.ok(I.eqBy(I.identity, symbol, symbol))
    assert.ok(I.eqBy(I.identity, Infinity, Infinity))
    assert.ok(I.eqBy(I.identity, -Infinity, -Infinity))
    assert.ok(I.eqBy(I.identity, NaN, NaN))
  })
})
