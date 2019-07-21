import { _curry2 } from './internal/_curry'

function times(fn: (index: number) => any, n: number): Array<any> {
  let len = Math.floor(n)
  if (!len || len < 0) len = 0

  const result = new Array(len)
  for (let index = 0; index < len; index += 1) {
    result[index] = fn(index)
  }

  return result
}

export default _curry2(times)
