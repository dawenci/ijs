const assert = require('assert')
const I = require('../dist/cjs')

describe('floor', function() {
  it('floor', function() {
    assert.equal(I.floor(1.4), 1)
    assert.equal(I.floor(1.9), 1)
    assert.equal(I.floor(-1.4), -2)
    assert.equal(I.floor(-1.9), -2)
  })
})
