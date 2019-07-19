import { RESULT, STEP, Transformer } from './protocol'
import BaseTransformer from './base'
import _reduced from './reduced'
import { curry2 } from '../../curry'

class XSome extends BaseTransformer {
  private any: boolean
  constructor(private predicate, private transformer) {
    super()
    this.any = false
  }

  [RESULT](accumulator) {
    if (!this.any) {
      accumulator = this.transformer[STEP](accumulator, false)
    }
    return this.transformer[RESULT](accumulator)
  }

  [STEP](accumulator, currentValue) {
    if (this.predicate(currentValue)) {
      this.any = true
      accumulator = _reduced(this.transformer[STEP](accumulator, true))
    }
    return accumulator
  }
}

function transducer(predicate: (value: any) => boolean, transformer: Transformer): Transformer {
  return new XSome(predicate, transformer)
}

export default curry2(transducer)
