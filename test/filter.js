const assert = require('assert')
const I = require('../dist/cjs')

describe('filter', function() {
  it('filter', function() {
    assert.deepEqual(I.filter(I.eq(2), [1,2,3]), [2])
  })
})
