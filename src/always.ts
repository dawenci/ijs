import { curry1 } from './curry'

// K 组合子
const K = x => () => x

export default curry1(K)
