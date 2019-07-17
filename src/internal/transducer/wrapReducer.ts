import { STEP, Reducer, Transformer } from './protocol'
import BaseTranducer from './base'

// 将普通 reducer 包装成 transformer
class XfWrap extends BaseTranducer {
  constructor(private reducer: Reducer) {
    super()
  }
  [STEP](accumulator, currentValue) {
    return this.reducer(accumulator, currentValue)
  }
}

// 包装 reducing function 为 Transformer
export default function wrap(reducer: Reducer | Transformer): Transformer {
  return typeof reducer === 'function'
    ? new XfWrap(reducer)
    : reducer
}
