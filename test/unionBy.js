const assert = require('assert')
const I = require('../dist/cjs')

describe('unionBy', function() {
  it('unionBy', function() {
    assert.deepEqual(I.unionBy(I.identity, [1,2,3], [1,2,3,4]), [1,2,3,4])
    assert.deepEqual(I.unionBy(o => o.a, [{a:1},{a:1},{a:2}], [{a:2},{a:3}]), [{a:1},{a:2},{a:3}])

    const result = I.unionBy(I.identity, [NaN, NaN], [NaN, NaN])
    assert.ok( I.equals(result, [NaN]) )
  })
})
