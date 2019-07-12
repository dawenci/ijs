const assert = require('assert')
const I = require('../dist/cjs')

describe('reject', function() {
  it('reject', function() {
    assert.deepEqual(I.reject(I.eq(2), [1,2,3]), [1,3])
  })
})
