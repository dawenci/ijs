const assert = require('assert')
const I = require('../dist/cjs')

describe('when', function() {
  it('when true', function() {
    assert.equal(I.when(I.t, I.inc, 1), 2)
  })

  it('when false', function() {
    assert.equal(I.when(I.f, I.inc, 1), 1)
  })
})
