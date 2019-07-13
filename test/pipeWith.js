const assert = require('assert')
const I = require('../dist/cjs')

describe('pipeWith', function() {
  const withAddOne = (next, value) => next(value + 1)

  it('单个函数', function() {
    const value = I.pipeWith(withAddOne, [I.inc])(1)
    assert.deepEqual(value, 2)
  })

  it('多个函数，从右到左，应用 with 函数', function() {
    const value1 = I.pipeWith(withAddOne, [ I.inc, I.multiply(2) ])(1)
    const value2 = I.pipeWith(withAddOne, [ I.multiply(2), I.inc ])(1)
    assert.deepEqual(value1, 6)
    assert.deepEqual(value2, 4)
  })

  it('入口多参数', function() {
    const value = I.pipeWith(withAddOne, [(a, b) => a + b])(1,2)
    assert.deepEqual(value, 3)
  })

  it('入口柯里化', function() {
    const value = I.pipeWith(withAddOne, [(a,b) => a + b])(1)(2)
    assert.deepEqual(value, 3)
  })
})
