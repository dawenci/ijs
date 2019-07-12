const assert = require('assert')
const I = require('../dist/cjs')

describe('clone', function() {
  it('clone', function() {
    assert.equal(I.clone(null), null)
    assert.equal(I.clone(undefined), undefined)
    assert.equal(I.clone(1), 1)
    assert.equal(I.clone(false), false)
    assert.equal(I.clone(true), true)
    assert.equal(I.clone('aaa'), 'aaa')
    const symbol = Symbol()
    assert.equal(I.clone(symbol), symbol)

    assert.deepEqual(I.clone([]), [])
    assert.deepEqual(I.clone([1,1,1]), [1, 1, 1])
    assert.deepEqual(I.clone({}), {})
    assert.deepEqual(I.clone({a: 1, b: 1}), {a: 1, b: 1})

    assert.deepEqual(I.clone(new Date(2018,12,25)), new Date(2018,12,25))
    assert.deepEqual(I.clone(/regexp/gimuy), /regexp/gimuy)

    assert.deepEqual(I.clone(new Map([[1,1]])), new Map([[1,1]]))
    assert.deepEqual(I.clone(new Set([1])), new Set([1]))

    const obj = {}
    Object.setPrototypeOf(obj, { x: 1 })
    assert.deepEqual(I.clone(obj), {x:1})
  })

})
