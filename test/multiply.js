const assert = require('assert')
const I = require('../dist/cjs')

describe('multiply', function() {
  it('multiply', function() {
    assert.equal(I.multiply(2, 3), 6)
    assert.equal(I.multiply(2)(3), 6)
    assert.equal(I.multiply('2', 3), 6)
    assert.equal(I.multiply(2, '3'), 6)
    assert.equal(I.multiply('2', '3'), 6)
  })
})
