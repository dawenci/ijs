const assert = require('assert')
const I = require('../dist/cjs')

describe('tap', function() {
  it('返回值', function() {
    assert.equal(I.tap(()=>null, 1), 1)
  })

  it('执行函数', function() {
    let x = 0
    function fn(v) { x = v }
    I.tap(fn, 1)
    assert.equal(x, 1)
  })
})
