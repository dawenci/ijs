const assert = require('assert')
const I = require('../dist/cjs')

describe('isEmpty', function() {
  it('empty', () => {
    assert.ok(I.isEmpty(null))
    assert.ok(I.isEmpty(undefined))
    assert.ok(I.isEmpty(1))
    assert.ok(I.isEmpty({}))
    assert.ok(I.isEmpty([]))
    assert.ok(I.isEmpty(new Number(1)))
    assert.ok(I.isEmpty(function(){}))
  })

  it('not empty', () => {
    const n = new Number(1)
    n.x = 1
    assert.equal(I.isEmpty(n), false)

    const f = function(){}
    f.x = 1
    assert.equal(I.isEmpty(f), false)
    assert.equal(I.isEmpty([1]), false)
    assert.equal(I.isEmpty({a: ''}), false)
  })
})
