const assert = require('assert')
const I = require('../dist/cjs')

describe('apply', function() {
  it('柯里化函数应用', function() {
    assert.equal(I.apply(I.add, [1,2]), 3)
  })

  it('bound 函数应用', function() {
    function fn(a) { return a + this.value }
    assert.equal(I.apply(fn.bind({ value: 2 }), [1]), 3)
  })
})
