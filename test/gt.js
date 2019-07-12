const assert = require('assert')
const I = require('../dist/cjs')

describe('gt', function() {
  it('gt', function() {
    assert.ok(I.gt(1,0))
    assert.ok(I.gt(1)(0))
  })
})
