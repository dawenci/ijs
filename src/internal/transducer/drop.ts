import { STEP, Transformer } from './protocol'
import BaseTransformer from './base'
import { _curry2 } from '../_curry'

class XDrop extends BaseTransformer {
  constructor(private n: number, private transformer) {
    super()
  }
  [STEP](accumulator, currentValue) {
    if (this.n > 0) {
      this.n -= 1
      return accumulator
    }
    return this.transformer[STEP](accumulator, currentValue)
  }
}

function transducer(n: number, transformer: Transformer): Transformer {
  return new XDrop(n, transformer)
}

export default _curry2(transducer)
