const assert = require('assert')
const I = require('../dist/cjs')

describe('nthArg', function() {
  it('nthArg', function() {
    assert.equal(I.nthArg(-4)(0,1,2), undefined)
    assert.equal(I.nthArg(-3)(0,1,2), 0)
    assert.equal(I.nthArg(-2)(0,1,2), 1)
    assert.equal(I.nthArg(-1)(0,1,2), 2)
    assert.equal(I.nthArg(0)(0,1,2), 0)
    assert.equal(I.nthArg(1)(0,1,2), 1)
    assert.equal(I.nthArg(2)(0,1,2), 2)
    assert.equal(I.nthArg(3)(0,1,2), undefined)
  })
})
