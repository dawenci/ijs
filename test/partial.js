const assert = require('assert')
const I = require('../dist/cjs')

describe('partial', function() {
  it('partial', function() {
    function fn(a, b) { return a - b }
    const p1 = I.partial(fn, [2])
    const p2 = I.partial(fn, [I.__, 2])
    const p3 = I.partial(fn, [I.__, 2, 2])

    const cp1 = I.curry(p1)
    const cp2 = I.curry(p2)
    const cp3 = I.curry(p2)
    
    const pc1 = I.partial( I.curry(fn), [2] )
    const pc2 = I.partial( I.curry(fn), [I.__, 2] )
    const pc3 = I.partial( I.curry(fn), [I.__, 2, 2] )

    assert.equal(p1(1), 1)
    assert.equal(p2(1), -1)
    assert.equal(p3(1), -1)

    assert.equal(cp1(1), 1)
    assert.equal(cp2(1), -1)
    assert.equal(cp3(1), -1)

    // 确认 arity 正确
    assert.equal(cp1()(1), 1)
    assert.equal(cp2()(1), -1)
    assert.equal(cp3()(1), -1)

    assert.equal(pc1(1), 1)
    assert.equal(pc2(1), -1)
    assert.equal(pc3(1), -1)
  })
})
