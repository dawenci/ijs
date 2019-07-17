const assert = require('assert')
const I = require('../dist/cjs')

describe('take', function() {
  it('take', function() {
    assert.deepEqual(I.take(2, '012'), '01')
    assert.deepEqual(I.take(2, [0, 1, 2]), [0, 1])
    assert.deepEqual(I.take(2, null), [])
    assert.deepEqual(I.take(2, undefined), [])
    assert.deepEqual(I.take(2, 1), [])
    assert.deepEqual(I.take(2, Symbol()), [])
    assert.deepEqual(I.take(2, function(a,b){}), [])
    assert.deepEqual(I.take(2, {}), [])
    assert.deepEqual(I.take(2, { length: 3, 0: 0, 1: 1, 2: 2}), [0, 1])
  })
})
