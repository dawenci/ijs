const assert = require('assert')
const I = require('../dist/cjs')

describe('uniqBy', function() {
  it('uniqBy', function() {
    const data = [1,new Number(1),'s', new String('s'), /reg/, new Date(), {}, [], new Map(), new Set()]
    const duplicate = []
    I.forEach(v => { duplicate.push(v, v) }, data)
    assert.deepEqual(I.uniqBy(I.identity, duplicate), data)
    assert.ok(I.equals(I.uniqBy(I.identity, [NaN, NaN]), [NaN]))
  })
})
