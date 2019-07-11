import { curry1 } from './curry'

export default curry1((numbers: number[]): number => Math.min.apply(Math, numbers))
