import { STEP, Transformer } from './protocol'
import BaseTransformer from './base'
import { curry2 } from '../../curry'

class XFilter extends BaseTransformer {
  constructor(private predicate, private transformer) {
    super()
  }
  [STEP](accumulator, currentValue) {
    return this.predicate(currentValue) ? this.transformer[STEP](accumulator, currentValue) : accumulator
  }
}

function transducer(pred: (value: any) => boolean, transformer: Transformer): Transformer {
  return new XFilter(pred, transformer)
}

export default curry2(transducer)
