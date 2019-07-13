const assert = require('assert')
const I = require('../dist/cjs')

describe('compose', function() {
  it('单个函数', function() {
    assert.deepEqual(I.compose([I.inc])(1), 2)
  })

  it('多个函数，从右到左', function() {
    assert.deepEqual(I.compose([I.multiply(2), I.inc])(1), 4)
    assert.deepEqual(I.compose([I.inc, I.multiply(2)])(1), 3)
  })

  it('入口多参数', function() {
    assert.deepEqual(I.compose([(a,b) => a + b])(1,2), 3)
  })

  it('入口柯里化', function() {
    assert.deepEqual(I.compose([(a,b) => a + b])(1)(2), 3)
  })
})
