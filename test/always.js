const assert = require('assert')
const I = require('../dist/cjs')

describe('always', function() {
  it('总返回首次传入的参数', function() {
    assert.equal(I.always(1)(2), 1)
  })
})
