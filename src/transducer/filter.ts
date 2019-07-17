import {
  STEP,
  Transformer
} from './protocol'
import BaseTranducer from './base'
import { curry2 } from '../curry'

class XFilter extends BaseTranducer {
  constructor(private predicate, private transformer) {
    super()
  }
  [STEP](accumulator, currentValue) {
    return this.predicate(currentValue)
      ? this.transformer[STEP](accumulator, currentValue)
      : accumulator
  }
}

export default curry2(function filteringTransducer(
  pred: (value: any) => boolean,
  transformer: Transformer
): Transformer {
  return new XFilter(pred, transformer)
})
