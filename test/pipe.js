const assert = require('assert')
const I = require('../dist/cjs')

describe('pipe', function() {
  const add = (x, y) => x + y
  const inc = (x) => x + 1
  const mult10 = (x) => x * 10

  it('入口多参数 & 柯里化', function() {
    assert.deepEqual(I.pipe([ add, inc ])(1, 2), 4)
    assert.deepEqual(I.pipe([ add, inc ]) (1) (2), 4)
  })

  it('单个函数，返回柯里化函数', function() {
    assert.deepEqual(I.pipe([ add ])()() (1, 2), 3)
    assert.deepEqual(I.pipe([ add ])()() (1, 2), 3)
  })

  it('多个函数从左到右', function() {
    assert.deepEqual(I.pipe([ mult10, inc ])(1), 11)
    assert.deepEqual(I.pipe([ inc, mult10 ])(1), 20)
  })
})
