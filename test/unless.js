const assert = require('assert')
const I = require('../dist/cjs')

describe('unless', function() {
  it('unless true', function() {
    assert.equal(I.unless(I.t, I.inc, 1), 1)
  })

  it('unless false', function() {
    assert.equal(I.unless(I.f, I.inc, 1), 2)
  })
})
