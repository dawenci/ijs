const assert = require('assert')
const I = require('../dist/cjs')

describe('tail', function() {
  it('tail', function() {
    assert.deepEqual(I.tail([1,2,3]), [2,3])
    assert.deepEqual(I.tail([]), [])
    assert.deepEqual(I.tail('123'), '23')
  })
})
