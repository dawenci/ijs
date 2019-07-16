import {
  INIT,
  RESULT,
  STEP,
  Transformer
} from './protocol'

class XMap implements Transformer {
  constructor(private fn, private transformer) {} 
  [INIT]() {
    throw new Error('init not implemented')
  }
  [RESULT](accumulator) {
    return accumulator
  }
  [STEP](accumulator, currentValue) {
    return this.transformer[STEP](accumulator, this.fn(currentValue))
  }
}

export default function mappingTransducer(
  fn: (value: any) => any, transformer: Transformer
): Transformer {
  return new XMap(fn, transformer)
}
