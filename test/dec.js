const assert = require('assert')
const I = require('../dist/cjs')

describe('dec', function() {
  it('dec', function() {
    assert.equal(I.dec(1), 0)
  })
})
