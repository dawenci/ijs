import { _curry1 } from './internal/_curry'

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

export default _curry1(nthArg)
