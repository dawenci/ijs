import {
  STEP,
  Transformer
} from './protocol'
import BaseTransformer from './base'
import _reduced from './reduced'
import { curry2 } from '../../curry'

class XTap extends BaseTransformer {
  constructor(private fn, private transformer) {
    super()
  }
  [STEP](accumulator, currentValue) {
    this.fn(currentValue)
    return this.transformer[STEP](accumulator, currentValue)
  }
}

export default curry2(function(fn, transformer): Transformer {
  return new XTap(fn, transformer)
})
