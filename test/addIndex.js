const assert = require('assert')
const I = require('../dist/cjs')

describe('addIndex', function() {
  it('1 参数回调变 2 参数', function() {
    const r1 = I.addIndex(I.map)((value, index) => `${value}-${index}`, ['A', 'B'])
    assert.deepEqual(r1, ['A-0', 'B-1'])
  })

  it('2 参数回调变 3 参数', function() {
    const reduceIndexed = I.addIndex(I.reduce)
    const r2 = reduceIndexed((acc, value, index) => acc + (value + index), 0, [0,1,2])
    assert.equal(r2, 6)
  })

  it('新函数保持柯里化', function() {
    const reduceIndexed = I.addIndex(I.reduce)
    const r2 = reduceIndexed((acc, value, index) => acc + (value + index))(0)([0,1,2])
    assert.equal(r2, 6)
  })
})
