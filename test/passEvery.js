const assert = require('assert')
const I = require('../dist/cjs')

describe('passEvery', function() {
  it('函数列表为空，返回 true', () => {
    assert.ok(I.passEvery([], 3))
  })

  it('函数列表非空，通过全部函数测试 true', () => {
    assert.ok(I.passEvery([
      i => i > 3,
      i => i < 5
    ], 4))
  })

  it('函数列表非空，未能通过部分函数测试，false', () => {
    assert.equal(I.passEvery([
      i => i > 3,
      i => i < 4
    ], 4), false)
  })
})
