import { curry1 } from './curry'

export default curry1((numbers: number[]): number => Math.max.apply(Math, numbers))
