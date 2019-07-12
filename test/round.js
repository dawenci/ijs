const assert = require('assert')
const I = require('../dist/cjs')

describe('round', function() {
  it('round', function() {
    assert.equal(I.round(1.49), 1)
    assert.equal(I.round(1.50), 2)
    assert.equal(I.round(-1.50), -1)
    assert.equal(I.round(-1.51), -2)
  })
})
