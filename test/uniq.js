const assert = require('assert')
const I = require('../dist/cjs')

describe('uniq', function() {
  it('uniq', function() {
    const data = [1,new Number(1),'s', new String('s'), /reg/, new Date(), {}, [], new Map(), new Set()]
    const duplicate = []
    I.forEach(v => { duplicate.push(v, v) }, data)
    assert.deepEqual(I.uniq(duplicate), data)
    assert.ok(I.equals(I.uniq([NaN, NaN]), [NaN]))
  })
})
