const assert = require('assert')
const I = require('../dist/cjs')

describe('passSome', function() {
  it('函数列表为空，返回 false', () => {
    assert.equal(I.passSome([], 3), false)
  })

  it('通过部分函数测试 true', () => {
    assert.ok(I.passSome([
      i => i > 3,
      i => i < 4,
    ], 4))
  })

  it('全部函数测试未通过，false', () => {
    assert.equal(I.passSome([
      i => i > 3,
      i => i < 1,
    ], 2), false)
  })
})
