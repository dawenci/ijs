const assert = require('assert')
const I = require('../dist/cjs')

describe('map', function() {
  it('map', function() {
    assert.deepEqual(I.map(I.identity, [1,2,3]), [1,2,3])
  })
})
