const assert = require('assert')
const I = require('../dist/cjs')

describe('thunkify', function() {
  const fn = (a, b) => a + b
  const thunk = I.thunkify(fn)

  it('返回长度一致的新函数', function() {
    assert.equal(fn.length, thunk.length)
  })

  it('传递所有参数后，返回一个可以返回最终结果的新函数', function() {
    const result = thunk(1, 1)
    assert.equal(typeof result, 'function')
    assert.equal(result(), 2)
  })
})
