import {
  INIT,
  RESULT,
  STEP,
  Transformer
} from './protocol'

class XFilter {
  constructor(private predicate, private transformer) {} 
  [INIT]() {
    throw new Error('init not implemented')
  }
  [RESULT](accumulator) {
    return accumulator
  }
  [STEP](accumulator, currentValue) {
    return this.predicate(currentValue)
      ? this.transformer[STEP](accumulator, currentValue)
      : accumulator
  }
}

export default function filteringTransducer(
  pred: (value: any) => boolean,
  transformer: Transformer
): Transformer {
  return new XFilter(pred, transformer)
}
