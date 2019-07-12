const assert = require('assert')
const I = require('../dist/cjs')

describe('none', function() {
  it('数据为空列表，返回 true', () => {
    assert.equal(I.none((i) => i > 3, []), true)
  })

  it('非空列表，部分通过测试为 false', () => {
    assert.equal(I.none((i) => i > 3, [2,4]), false)
  })

  it('非空列表，全部通过测试为 false', () => {
    assert.equal(I.none((i) => i > 3, [2,4]), false)
  })

  it('非空列表，全部测试未通过，true', () => {
    assert.equal(I.none((i) => i > 3, [1,2]), true)
  })
})
