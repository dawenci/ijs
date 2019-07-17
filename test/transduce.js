const assert = require('assert')
const I = require('../dist/cjs')

describe('transduce', function() {
  var data = I.range(0, 10)
  var isEven = i => i % 2 === 0
  var mult10 = i => i * 10

  it('单个变换', function() {
    const result1 = I.transduce(
      I.map(mult10),
      (acc, val) => (acc.push(val), acc),
      [],
      data
    )

    const result2 = I.transduce(
      I.filter(isEven),
      (acc, val) => (acc.push(val), acc),
      [],
      data
    )

    assert.deepEqual(result1, [0, 10, 20,30,40,50,60,70,80,90])
    assert.deepEqual(result2, [0, 2,4,6,8])
  })

  it('多重变换，pipe, compose 的顺序相反', function() {
    const result1 =I.transduce(
      I.pipe(I.map(mult10), I.filter(isEven)),
      (acc, val) => (acc.push(val), acc),
      [],
      data
    )

    const result2 =I.transduce(
      I.compose(I.filter(isEven), I.map(mult10)),
      (acc, val) => (acc.push(val), acc),
      [],
      data
    )    

    assert.deepEqual(result1, [0, 20, 40, 60, 80])
    assert.deepEqual(result2, [0, 20, 40, 60, 80])
  })

})
