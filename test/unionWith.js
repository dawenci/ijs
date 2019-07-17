const assert = require('assert')
const I = require('../dist/cjs')

describe('unionWith', function() {
  it('unionWith', function() {
    assert.deepEqual(I.unionWith((a, b) => a === b, [1,2,3], [1,2,3,4]), [1,2,3,4])
    assert.deepEqual(I.unionWith((a, b) => a.a === b.a, [{a:1},{a:1},{a:2}], [{a:2},{a:3}]), [{a:1},{a:2},{a:3}])

    const result = I.unionWith(I.eq, [NaN, NaN], [NaN, NaN])
    assert.ok( I.equals(result, [NaN]) )
  })
})
