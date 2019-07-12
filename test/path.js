const assert = require('assert')
const I = require('../dist/cjs')

describe('path', function() {
  it('空值或空路径', () => {
    assert.equal(I.path(undefined, { undefined: 1 }), 1)
    assert.equal(I.path(null, { null: 1 }), 1)
    assert.equal(I.path({toString(){return 'x'}}, { x: 1 }), 1)
    assert.equal(I.path('a', undefined), undefined)
    assert.equal(I.path(['a'], undefined), undefined)
    assert.equal(I.path('', {a:1}), undefined)
  })

  it('字符串路径', () => {
    assert.equal(I.path(0, [1]), 1)
    assert.equal(I.path(0, {'0': 1}), 1)
    assert.equal(I.path('0', [1]), 1)
    assert.equal(I.path('a', {a:1}), 1)
    assert.equal(I.path('a.b', {a:{b:1}}), 1)
    assert.equal(I.path('a[0].b', {a:[{b:1}]}), 1)
  })

  it('数组路径', () => {
    assert.equal(I.path(['a'], {a:1}), 1)
    assert.equal(I.path(['a', 'b'], {a:{b:1}}), 1)
    assert.equal(I.path(['a', 'b.c', 'e[0]'], {a:{'b.c':{'e[0]':1}}}), 1)
  })
})
