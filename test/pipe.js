const assert = require('assert')
const I = require('../dist/cjs')

describe('pipe', function() {
  it('单个函数', function() {
    assert.deepEqual(I.pipe([I.inc])(1), 2)
  })

  it('多个函数，从左到右', function() {
    assert.deepEqual(I.pipe([I.multiply(2), I.inc])(1), 3)
    assert.deepEqual(I.pipe([I.inc, I.multiply(2)])(1), 4)
  })

  it('入口多参数', function() {
    assert.deepEqual(I.pipe([(a,b) => a + b])(1,2), 3)
  })

  it('入口柯里化', function() {
    assert.deepEqual(I.pipe([(a,b) => a + b])(1)(2), 3)
  })
})
