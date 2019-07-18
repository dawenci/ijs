const assert = require('assert')
const I = require('../dist/cjs')

describe('camelCase', function() {
  it('camelCase', function() {
    assert.equal(I.camelCase('Abc'), 'abc')
    assert.equal(I.camelCase('  Abc'), 'abc')
    assert.equal(I.camelCase('  -Abc'), 'abc')
    assert.equal(I.camelCase('A-bc'), 'aBc')
    assert.equal(I.camelCase('A--bc'), 'aBc')
    assert.equal(I.camelCase('A_bc'), 'aBc')
    assert.equal(I.camelCase('A__bc'), 'aBc')
    assert.equal(I.camelCase('A--__bc'), 'aBc')
    assert.equal(I.camelCase('A__--bc'), 'aBc')
    assert.equal(I.camelCase('A-b-c'), 'aBC')
  })
})
