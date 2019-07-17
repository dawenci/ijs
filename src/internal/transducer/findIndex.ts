import { STEP, RESULT, Transformer } from './protocol'
import BaseTransformer from './base'
import _reduced from './reduced'
import { curry2 } from '../../curry'

class XFindIndex extends BaseTransformer {
  private found: boolean
  private index: number
  constructor(private predicate, private transformer) {
    super()
    this.found = false
    this.index = -1
  }

  [RESULT](accumulator) {
    if (!this.found) {
      accumulator = this.transformer[STEP](accumulator, -1)
    }
    return this.transformer[RESULT](accumulator)
  }

  [STEP](accumulator, currentValue) {
    this.index += 1
    if (this.predicate(currentValue)) {
      this.found = true;
      accumulator = _reduced(this.transformer[STEP](accumulator, this.index))
    }
    return accumulator
  }
}

function transducer(fn: (value: any) => any, transformer: Transformer): Transformer {
  return new XFindIndex(fn, transformer)
}

export default curry2(transducer)
