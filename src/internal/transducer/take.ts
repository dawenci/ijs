import {
  STEP,
  Transformer
} from './protocol'
import BaseTransformer from './base'
import _reduced from './reduced'
import { _curry2 } from '../_curry'

class XTake extends BaseTransformer {
  private index: number
  constructor(private n, private transformer) {
    super()
    this.index = 0
  }
  [STEP](accumulator, currentValue) {
    this.index += 1
    const result = this.n === 0 ? accumulator : this.transformer[STEP](accumulator, currentValue)
    return this.n >= 0 && this.index >= this.n ? _reduced(result) : result
  }
}

export default _curry2(function(n, transformer): Transformer {
  return new XTake(n, transformer)
})
