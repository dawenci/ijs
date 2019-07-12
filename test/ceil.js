const assert = require('assert')
const I = require('../dist/cjs')

describe('ceil', function() {
  it('ceil', function() {
    assert.equal(I.ceil(1.4), 2)
    assert.equal(I.ceil(1.9), 2)
    assert.equal(I.ceil(-1.4), -1)
    assert.equal(I.ceil(-1.9), -1)
  })
})
