import { curry2 } from './curry'
import stringToPath from './internal/_stringToPath'

export default curry2((path: string | Array<string>, obj: any) => {
  if (!obj) return undefined

  let parsedPath
  if (typeof path === 'string') {
    parsedPath = stringToPath(path)
  } else if (Array.isArray(path)) {
    parsedPath = path
  }
  
  if (!parsedPath.length) return undefined

  let value = obj
  let index = 0
  while (index < parsedPath.length) {
    if (value === null || value === undefined) return
    const prop = parsedPath[index]
    value = value[prop]
    index += 1
  }
  return value
})
