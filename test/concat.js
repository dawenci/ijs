const assert = require('assert')
const I = require('../dist/cjs')

describe('concat', function() {
  it('concat', function() {
    assert.deepEqual(I.concat(1,2,3), [1,2])
    assert.deepEqual(I.concat([1], 2, 3), [1,2])
    assert.deepEqual(I.concat([1], [2]), [1,2])
    assert.deepEqual(I.concat('1', 2), '12')
    assert.deepEqual(I.concat('1', '23'), '123')
    function fn() {
      return I.concat(arguments, arguments)
    }
    assert.deepEqual( fn(1), [1,1] )
  })
})
