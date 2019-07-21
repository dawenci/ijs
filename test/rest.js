const assert = require('assert')
const I = require('../dist/cjs')

describe('rest', function() {
  it('rest', function() {
    assert.deepEqual(I.rest(null), [])
    assert.deepEqual(I.rest([1,2,3]), [2,3])
    assert.deepEqual(I.rest([]), [])
    assert.deepEqual(I.rest('123'), '23')
  })
})
