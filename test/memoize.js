const assert = require('assert')
const I = require('../dist/cjs')

describe('memoize', function() {
  it('原始类型（undefined 除外）参数', function() {
    const fn = I.memoize((a) => [a])
    assert.equal(fn(1), fn(1))
    assert.equal(fn('1'), fn('1'))
    assert.equal(fn(true), fn(true))
    assert.equal(fn(null), fn(null))
    assert.equal(fn(NaN), fn(NaN))
    const symbol = Symbol()
    assert.equal(fn(symbol), fn(symbol))
  })

  it('对象型 key ', function() {
    
  })

})
