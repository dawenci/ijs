const assert = require('assert')
const I = require('../dist/cjs')

describe('identity', function() {
  it('恒等', function() {
    [1, 'str', undefined, null, true, false, Symbol(), {}, [], ()=>1, new Map, new Set, /reg/, new Date].forEach(obj => {
      assert.equal(I.identity(obj), obj)
    })
    assert.ok(I.eq(I.identity(NaN), NaN))
  })
})
