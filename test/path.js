const assert = require('assert')
const I = require('../dist/cjs')

describe('path', function() {
  it('字符串路径', () => {
    assert.equal(I.path('a', {a:1}), 1)
    assert.equal(I.path('a.b', {a:{b:1}}), 1)
  })

  it('数组路径', () => {
    assert.equal(I.path(['a'], {a:1}), 1)
    assert.equal(I.path(['a', 'b'], {a:{b:1}}), 1)
  })
})
