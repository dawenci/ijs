import {
  STEP,
  RESULT,
  Transformer
} from './protocol'
import BaseTranducer from './base'
import _reduced from './reduced'
import { curry2 } from '../curry'

class XFind extends BaseTranducer {
  private found: boolean
  constructor(private fn, private transformer) {
    super()
    this.found = false
  }

  [RESULT](accumulator) {
    if (!this.found) {
      accumulator = this.transformer[STEP](accumulator, void 0)
    }
    return this.transformer[RESULT](accumulator)
  }

  [STEP](accumulator, currentValue) {
    if (this.fn(currentValue)) {
      this.found = true
      accumulator = _reduced(this.transformer[STEP](accumulator, currentValue))
    }
    return accumulator
  }
}

export default curry2(function (
  fn: (value: any) => any, transformer: Transformer
): Transformer {
  return new XFind(fn, transformer)
})
