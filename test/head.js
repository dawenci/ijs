const assert = require('assert')
const I = require('../dist/cjs')

describe('head', function() {
  it('head', function() {
    assert.equal(I.head([1,2,3]), 1)
    assert.equal(I.head([]), undefined)
    assert.equal(I.head('123'), '1')
  })
})
