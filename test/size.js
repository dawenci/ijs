const assert = require('assert')
const I = require('../dist/cjs')

describe('size', function() {
  it('size', function() {
    assert.equal(I.size([1,2,3]), 3)
    assert.equal(I.size([]), 0)
    assert.equal(I.size('123'), 3)
    assert.equal(I.size({ length: 3 }), 3)
    const fn = function(a,b) {}
    assert.equal(I.size(fn), 2)

    const fn2 = function(a, b = 1, ...c) {}
    assert.equal(I.size(fn2), 1)
  })
})
