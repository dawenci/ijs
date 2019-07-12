const assert = require('assert')
const I = require('../dist/cjs')

describe('isNil', function() {
  it('isNil', () => {
    assert.ok(I.isNil(null))
    assert.ok(I.isNil(undefined))
    assert.equal(I.isNil(0), false)
    assert.equal(I.isNil(false), false)
  })
})
