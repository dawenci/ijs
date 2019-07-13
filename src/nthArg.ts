import { curry1 } from './curry'

function nthArg(index: number): any {
  return function() {
    const size = arguments.length
    return index >= size
      ? undefined
      : index < 0
        ? arguments[size + index]
        : arguments[index]
  }
}

export default curry1(nthArg)
