const assert = require('assert')
const I = require('../dist/cjs')

describe('lt', function() {
  it('lt', function() {
    assert.ok(I.lt(0,1))
    assert.ok(I.lt(0)(1))
  })
})
