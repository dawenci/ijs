const assert = require('assert')
const I = require('../dist/cjs')

describe('merge', function() {
  it('null', function() {
    assert.deepEqual(I.merge(null, null), {})
  })

  it('不修改原对象', function() {
    const a = { x: 1 }
    const b = { y: 1 }
    const r = I.merge(a, b)
    assert.notEqual(a, r)
    assert.notEqual(b, r)
  })

  it('数组 + 数组/对象/function = 数组', function() {
    const r = [ 1 ]
    r.x = 1
    assert.deepEqual(I.merge([ 1 ], { x: 1 }), r)
    assert.deepEqual(I.merge([ 1, 2 ], [ 2 ]), [ 2, 2 ])

    const fn = function() {}
    fn[2] = 3
    assert.deepEqual(I.merge([ 1, 2 ], fn), [ 1, 2, 3 ])
  })

  it('第二个参数中的原始类型直接覆盖第一个参数中的对应属性', function() {
    assert.deepEqual(I.merge({ x: 1 }, { x: 2 }), { x: 2 })
    assert.deepEqual(I.merge({ x: 1 }, { x: '2' }), { x: '2' })
    const symbol = Symbol()
    assert.deepEqual(I.merge({ x: 1 }, { x: symbol }), { x: symbol })
    assert.deepEqual(I.merge({ x: 1 }, { x: null }), { x: null })
    assert.deepEqual(I.merge({ x: 1 }, { x: undefined }), { x: undefined })
    assert.deepEqual(I.merge({ x: 1 }, { x: true }), { x: true })
    assert.deepEqual(I.merge({ x: 1 }, { x: false }), { x: false })
  })

  it('两个的属性值为非原始类型时，合并属性', function() {
    assert.deepEqual(I.merge({ x: { y: 1 } }, { x: { z: 2 } }), { x: { y: 1, z: 2 } })

    assert.deepEqual(I.merge({ x: [ 1, 2 ] }, { x: [ 3 ] }), { x: [ 3, 2 ] })

    const fn = function() {}
    fn.x = { z: 2 }
    assert.deepEqual(I.merge({ x: { y: 1 } }, fn), { x: { y: 1, z: 2 } })

    const r1 = { x: [ 1, 2 ] }
    r1.x.y = 1
    assert.deepEqual(I.merge({ x: [ 1, 2 ] }, { x: { y: 1 } }), r1)
    assert.deepEqual(I.merge({ x: {} }, { x: [ 1, 2 ] }), { x: { 0: 1, 1: 2 } })
  })

  it('循环引用', function() {
    var object = {
      foo: { a: 1 },
      bar: { a: 2 }
    }
    var source = {
      foo: { b: { c: { d: {} } } },
      bar: {}
    }
    source.foo.b.c.d = source
    source.bar.b = source.foo.b
    var actual = I.merge(object, source)
    assert.equal(actual.bar.b, actual.foo.b)
    assert.equal(actual.foo.b.c.d, actual.foo.b.c.d.foo.b.c.d)
  })
})
