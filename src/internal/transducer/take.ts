import {
  STEP,
  Transformer
} from './protocol'
import BaseTranducer from './base'
import _reduced from './reduced'
import { curry2 } from '../../curry'

class XTake extends BaseTranducer {
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

export default curry2(function(n, transformer): Transformer {
  return new XTake(n, transformer)
})
