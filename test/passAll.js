const assert = require('assert')
const I = require('../dist/cjs')

describe('passAll', function() {
  it('函数列表为空，返回 true', () => {
    assert.ok(I.passAll([], 3))
  })

  it('函数列表非空，通过全部函数测试 true', () => {
    assert.ok(I.passAll([
      i => i > 3,
      i => i < 5
    ], 4))
  })

  it('函数列表非空，未能通过部分函数测试，false', () => {
    assert.equal(I.passAll([
      i => i > 3,
      i => i < 4
    ], 4), false)
  })
})
