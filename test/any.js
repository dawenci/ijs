const assert = require('assert')
const I = require('../dist/cjs')

describe('any', function() {
  it('数据为空列表，返回 false', () => {
    assert.equal(I.any((i) => i > 3, []), false)
  })

  it('非空列表，部分通过测试为 true', () => {
    assert.ok(I.any((i) => i > 3, [2,4]))
  })

  it('非空列表，全部测试未通过，false', () => {
    assert.equal(I.any((i) => i > 3, [1,2]), false)
  })
})
