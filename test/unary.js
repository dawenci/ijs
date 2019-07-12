const assert = require('assert')
const I = require('../dist/cjs')

describe('unary', function() {
  it('只传入单一参数', function() {
    assert.deepEqual(I.unary((a,b) => [a,b])(1,2), [1,undefined])
  })
})
