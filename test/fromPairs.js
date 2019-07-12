const assert = require('assert')
const I = require('../dist/cjs')

describe('fromPairs', function() {
  it('fromPairs', function() {
    assert.deepEqual(I.fromPairs([['a','b'], ['c', 'd']]), {a: 'b', c: 'd'})
  })
})
