import { curry1 } from './curry'

const slice = Array.prototype.slice
export default curry1((list: any) => {
  slice.call(list, 1)
})
