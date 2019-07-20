const assert = require('assert')
const I = require('../dist/cjs')

describe('bind', function() {
  it('bind', function() {
    function fn(x) { return this.value + x }
    const bound1 = I.bind(fn, { value: 1 })
    const bound2 = I.bind(fn, { value: 1 }, 2)
    assert.equal(bound1(1), 2)
    assert.equal(bound2(1), 2)
  })
})
