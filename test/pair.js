const assert = require('assert')
const I = require('../dist/cjs')

describe('pair', function() {
  it('pair', function() {
    assert.deepEqual(I.pair('a','b'), ['a', 'b'])
  })
})
