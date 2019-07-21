const assert = require('assert')
const I = require('../dist/cjs')

describe('first', function() {
  it('first', function() {
    assert.equal(I.first(null), undefined)
    assert.equal(I.first([1,2,3]), 1)
    assert.equal(I.first([]), undefined)
    assert.equal(I.first('123'), '1')
  })
})
