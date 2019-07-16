const assert = require('assert')
const I = require('../dist/cjs')

describe('complement', function() {
  it('complement', function() {
    assert.equal(I.complement(I.t)(), false)
    assert.equal(I.complement(I.f)(), true)
  })
})
