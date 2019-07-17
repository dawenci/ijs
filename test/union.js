const assert = require('assert')
const I = require('../dist/cjs')

describe('union', function() {
  it('union', function() {
    assert.deepEqual(I.union([1,2,3], [1,2,3,4]), [1,2,3,4])

    const result = I.union([NaN, NaN], [NaN, NaN])
    assert.ok( I.equals(result, [NaN]) )
  })
})
