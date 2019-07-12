const assert = require('assert')
const I = require('../dist/cjs')

describe('f', function() {
  it('false', function() {
    assert.equal(I.f('any'), false)
  })
})
