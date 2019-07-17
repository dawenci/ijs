import {
  INIT,
  RESULT,
  STEP,
  Transformer
} from './protocol'

export default class BaseTranducer implements Transformer {
  [INIT]() {
    throw new Error('init not implemented')
  }
  [STEP](accumulator, currentValue) {
    throw new Error('step not implemented')
  }
  [RESULT](accumulator) {
    return accumulator
  }
}
