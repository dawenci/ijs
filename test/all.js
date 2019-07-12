const assert = require('assert')
const I = require('../dist/cjs')

describe('all', function() {
  it('数据为空列表，返回 true', () => {
    assert.ok(I.all((i) => i > 3, []))
  })

  it('非空列表，全部通过测试为 true', () => {
    assert.ok(I.all((i) => i > 3, [4,5]))
  })

  it('非空列表，有测试未通过，false', () => {
    assert.equal(I.all((i) => i > 3, [3]), false)
  })
})
