import { _curry1 } from './internal/_curry'

// K 组合子
const K = x => () => x

export default _curry1(K)
