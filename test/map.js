const assert = require('assert')
const I = require('../dist/cjs')

describe('map', function() {
  it('单列表', function() {
    assert.deepEqual(I.map(I.identity, [1,2,3]), [1,2,3])
  })

  it('多列表', function() {
    assert.deepEqual(I.map(I.add, [1,2,3], [1,2,3]), [2,4,6])
    assert.deepEqual(I.map((a,b,c)=>a+b+c, [1,2,3], [1,2,3], [1,2,3]), [3,6,9])
  })

  it('多列表，以最短列表为长度返回结果', function() {
    assert.deepEqual(I.map((a,b,c)=>a+b+c, [1,2,3], [1,2], [1,2,3]), [3,6])
  })
})
