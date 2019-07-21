import { _curry1 } from './internal/_curry'

// K 组合子
const K = <T>(x: T) => (): T => x

export default _curry1(K)
