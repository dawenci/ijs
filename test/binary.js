const assert = require('assert')
const I = require('../dist/cjs')

describe('binary', function() {
  it('只传入两个参数', function() {
    assert.deepEqual(I.binary((a,b,c) => [a,b,c])(1,2,3), [1,2,undefined])
  })
})
