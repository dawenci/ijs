import { RESULT, STEP, Transformer } from './protocol'
import BaseTransformer from './base'
import _reduced from './reduced'
import { curry2 } from '../../curry'

class XAll extends BaseTransformer {
  private all: boolean
  constructor(private predicate, private transformer) {
    super()
    this.all = false
  }

  [RESULT](accumulator) {
    if (this.all) {
      accumulator = this.transformer[STEP](accumulator, true)
    }
    return this.transformer[RESULT](accumulator)
  }

  [STEP](accumulator, currentValue) {
    if (!this.predicate(currentValue)) {
      this.all = false
      accumulator = _reduced(this.transformer[STEP](accumulator, false))
    }
    return accumulator
  }
}

function transducer(pred: (value: any) => boolean, transformer: Transformer): Transformer {
  return new XAll(pred, transformer)
}

export default curry2(transducer)
