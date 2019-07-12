const assert = require('assert')
const I = require('../dist/cjs')

describe('property', function() {
  it('对象属性', () => {
    assert.equal(I.property('', {a:1}), undefined)
    assert.equal(I.property('a', {a:1}), 1)
    assert.equal(I.property('a.b', {'a.b': 1}), 1)
    assert.equal(I.property(undefined, {undefined: 1}), 1)
    assert.equal(I.property(null, {null: 1}), 1)
  })
})
