import {
  STEP,
  Transformer
} from './protocol'
import BaseTransformer from './base'
import { _curry2 } from '../_curry'

class XMap extends BaseTransformer {
  constructor(private fn, private transformer) {
    super()
  }
  [STEP](accumulator, currentValue) {
    return this.transformer[STEP](accumulator, this.fn(currentValue))
  }
}

export default _curry2(function mappingTransducer(
  fn: (value: any) => any, transformer: Transformer
): Transformer {
  return new XMap(fn, transformer)
})
