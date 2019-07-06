import { curry1 } from './curry'
export default curry1((obj: Object): Array<string> => Object.keys(obj))
