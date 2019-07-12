const assert = require('assert')
const I = require('../dist/cjs')

describe('passNone', function() {
  it('函数列表为空，返回 true', () => {
    assert.equal(I.passNone([], 3), true)
  })

  it('通过部分函数测试，false', () => {
    assert.equal(I.passNone([
      i => i > 3,
      i => i < 5,
    ], 6), false)
  })

  it('通过全部函数测试，false', () => {
    assert.equal(I.passNone([
      i => i > 3,
      i => i < 5
    ], 4), false)
  })

  it('全部函数测试未通过，true', () => {
    assert.equal(I.passNone([
      i => i > 4,
      i => i < 4
    ], 4), true)
  })
})
