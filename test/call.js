const assert = require('assert')
const I = require('../dist/cjs')

describe('call', function() {
  it('柯里化函数应用', function() {
    assert.equal(I.call(I.add, 1, 2), 3)
  })

  it('bound 函数应用', function() {
    function fn(a) { return a + this.value }
    assert.equal(I.call(fn.bind({ value: 2 }), 1), 3)
  })
})
