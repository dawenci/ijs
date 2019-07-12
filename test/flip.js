const assert = require('assert')
const I = require('../dist/cjs')

describe('flip', function() {
  it('无传入函数，返回自身', function() {
    assert.equal(I.flip(), I.flip)
  })

  it('单参数函数，自动柯里化', function() {
    assert.deepEqual(I.flip((i) => i)()(1), 1)
  })

  it('多参数函数，自动交换前两个参数位置', function() {
    assert.deepEqual(I.flip(function(a,b) { return [a,b] })(1,2), [2,1])
    assert.deepEqual(I.flip(function(a,b,c) { return [a,b,c] })(1,2,3), [2,1,3])
  })

  it('可以 flip 已经柯里化的函数', function() {
    assert.deepEqual(I.flip(I.curry(function(a,b) { return [a,b] }))(1,2), [2,1])
    assert.deepEqual(I.flip(I.curry(function(a,b,c,d,e,f) { return [a,b,c] }))(1,2,3,4,5,6), [2,1,3])
  })
})
