const assert = require('assert')
const I = require('../dist/cjs')

describe('transduce', function() {
  var data = I.range(0, 10)
  var isEven = i => i % 2 === 0
  var mult10 = i => i * 10

  it('多重变换，pipe, compose 的顺序相反', function() {
    const result1 =I.transduce(
      I.pipe([
        I.map(mult10),
        I.filter(isEven)
      ]),
      (acc, val) => (acc.push(val), acc),
      [],
      data
    )

    const result2 =I.transduce(
      I.compose([
        I.filter(isEven),
        I.map(mult10)
      ]),
      (acc, val) => (acc.push(val), acc),
      [],
      data
    )    

    assert.deepEqual(result1, [0, 20, 40, 60, 80])
    assert.deepEqual(result2, [0, 20, 40, 60, 80])
  })

  it('map', function() {
    const result = I.transduce(
      I.map(mult10),
      (acc, val) => (acc.push(val), acc),
      [],
      data
    )
    assert.deepEqual(result, [0, 10, 20,30,40,50,60,70,80,90])
  })

  it('filter', function() {
    const result = I.transduce(
      I.filter(isEven),
      (acc, val) => (acc.push(val), acc),
      [],
      data
    )
    assert.deepEqual(result, [0, 2,4,6,8])
  })

  it('find', function() {
    var data = I.range(0, 10)
    var isEven = i => i % 2 === 0
    const result = I.transduce(
      I.find(isEven),
      (acc, val) => (acc.push(val), acc),
      [],
      data
    )
    assert.deepEqual(result, [0])
  })

  it('every', function() {
    const result = I.transduce(
      I.every(isEven),
      (acc, val) => (acc.push(val), acc),
      [],
      data
    )
    assert.deepEqual(result, [false])
  })

  it('some', function() {
    const result = I.transduce(
      I.some(isEven),
      (acc, val) => (acc.push(val), acc),
      [],
      data
    )
    assert.deepEqual(result, [true])
  })

  it('findIndex', function() {
    const result = I.transduce(
      I.findIndex(i => i > 5),
      (acc, val) => (acc.push(val), acc),
      [],
      data
    )
    assert.deepEqual(result, [6])
  })

  it('drop', function() {
    const result = I.transduce(
      I.drop(5),
      (acc, val) => (acc.push(val), acc),
      [],
      data
    )
    assert.deepEqual(result, [5,6,7,8,9])
  })

  it('dropWhile', function() {
    const result = I.transduce(
      I.dropWhile(i => i < 5),
      (acc, val) => (acc.push(val), acc),
      [],
      data
    )
    assert.deepEqual(result, [5,6,7,8,9])
  })

  it('take', function() {
    const result = I.transduce(
      I.take(2),
      (acc, val) => (acc.push(val), acc),
      [],
      data
    )
    assert.deepEqual(result, [0,1])
  })

})
