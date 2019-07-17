import { STEP, Transformer } from './protocol'
import BaseTransformer from './base'
import { curry2 } from '../../curry'

class XDropWhile extends BaseTransformer {
  index: number
  stop: boolean
  constructor(private predicate: (value: any) => boolean, private transformer) {
    super()
    this.stop = false
    this.index = 0
  }
  [STEP](accumulator, currentValue) {
    if (!this.stop && this.predicate(currentValue)) {
      this.index += 1
      return accumulator
    }
    this.stop = true
    return this.transformer[STEP](accumulator, currentValue)
  }
}

function transducer(predicate: (value: any) => boolean, transformer: Transformer): Transformer {
  return new XDropWhile(predicate, transformer)
}

export default curry2(transducer)
