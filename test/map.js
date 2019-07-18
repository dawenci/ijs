const assert = require('assert')
const I = require('../dist/cjs')

describe('map', function() {
  it('单列表', function() {
    assert.deepEqual(I.map(I.identity, [1,2,3]), [1,2,3])
  })
})
