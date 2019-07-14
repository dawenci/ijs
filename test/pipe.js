const assert = require('assert')
const I = require('../dist/cjs')

describe('pipe', function() {
  const add = (x, y) => x + y
  const inc = (x) => x + 1
  const mult10 = (x) => x * 10
  const withAdd10 = (next, value) => next(value + 10)

  it('入口多参数 & 柯里化', function() {
    assert.deepEqual(I.pipe(add, inc)(1, 2), 4)
    assert.deepEqual(I.pipe([ add, inc ])(1, 2), 4)
    assert.deepEqual(I.pipe([ add, inc ], withAdd10)(1, 2), 14)
    assert.deepEqual(I.pipe(add, inc) (1) (2), 4)
    assert.deepEqual(I.pipe([ add, inc ]) (1) (2), 4)
    assert.deepEqual(I.pipe([ add, inc ], withAdd10) (1) (2), 14)
  })

  it('单个函数，返回柯里化函数等待其他函数', function() {
    assert.deepEqual(I.pipe(add)(inc)()() (1, 2), 4)
    assert.deepEqual(I.pipe([ add ])(inc)()() (1, 2), 4)
    assert.deepEqual(I.pipe([ add ])([ inc ])()() (1, 2), 4)
    assert.deepEqual(I.pipe([ add ], withAdd10)()()([ inc ]) (1, 2), 14)
  })

  it('多个函数从左到右', function() {
    assert.deepEqual(I.pipe(mult10, inc)(1), 11)
    assert.deepEqual(I.pipe(inc, mult10)(1), 20)

    assert.deepEqual(I.pipe([ mult10, inc ])(1), 11)
    assert.deepEqual(I.pipe([ inc, mult10 ])(1), 20)

    assert.deepEqual(I.pipe([ mult10, inc ], withAdd10)(1), 21)
    assert.deepEqual(I.pipe([ inc, mult10 ], withAdd10)(1), 120)
  })
})
