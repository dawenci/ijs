const assert = require('assert')
const I = require('../dist/cjs')

describe('curryN', function() {
  it('curries a single value', function() {
    const f = I.curryN(4, function(a, b, c, d) {
      return (a + b * c) / d
    }) // f(12, 3, 6, 2) == 15
    const g = f(12)
    assert.deepEqual(g(3, 6, 2), 15)
  })

  it('curries multiple values', function() {
    const f = I.curryN(4, function(a, b, c, d) {
      return (a + b * c) / d
    }) // f(12, 3, 6, 2) == 15
    const g = f(12, 3)
    assert.deepEqual(g(6, 2), 15)
    const h = f(12, 3, 6)
    assert.deepEqual(h(2), 15)
  })

  it('allows further curryNing of a curried function', function() {
    const f = I.curryN(4, function(a, b, c, d) {
      return (a + b * c) / d
    }) // f(12, 3, 6, 2) == 15
    const g = f(12)
    assert.deepEqual(g(3, 6, 2), 15)
    const h = g(3)
    assert.deepEqual(h(6, 2), 15)
    assert.deepEqual(g(3, 6)(2), 15)
  })

  it('支持额外传入的参数', function() {
    const fn = function(a, b, c) {
      return Array.prototype.slice.call(arguments)
    }
    const curried = I.curryN(3, fn)
    assert.deepEqual(curried(1, 2, 3), [ 1, 2, 3 ])
    assert.deepEqual(curried(1, 2, 3, 4), [ 1, 2, 3, 4 ])
    assert.deepEqual(curried(1, 2)(3, 4), [ 1, 2, 3, 4 ])
    assert.deepEqual(curried(1)(2, 3, 4), [ 1, 2, 3, 4 ])
    assert.deepEqual(curried(1)(2)(3, 4), [ 1, 2, 3, 4 ])
  })

  it('支持默认值参数和 rest 参数', function() {
    const fn1 = I.curryN(2, (a, b = 2) => a + b, 2)
    assert.equal(fn1(1, 1), 2)

    const fn2 = I.curryN(2, (a, ...b) => a + I.sum(b), 3)
    assert.equal(fn2(1,1,1), 3)
  })
})
