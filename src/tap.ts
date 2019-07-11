import { curry2 } from './curry'

// K 组合子（但参数顺序相反）
function tap(y, x) {
  if (typeof y === 'function') y()
  return x
}

export default curry2(tap)
