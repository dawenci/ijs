const assert = require('assert')
const I = require('../dist/cjs')

describe('lte', function() {
  it('lte', function() {
    assert.ok(I.lte(0,1))
    assert.ok(I.lte(1,1))
    assert.ok(I.lte(0)(1))
    assert.ok(I.lte(1)(1))
  })
})
