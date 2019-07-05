import { curry2 } from './curry'

export default curry2((paths, obj) => {
  let value = obj
  let index = 0
  while (index < paths.length) {
    if (value === null || value === undefined) return
    const prop = paths[index]
    value = value[prop]
    index += 1
  }
  return value
})
