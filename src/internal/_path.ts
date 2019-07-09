import stringToPath from './_stringToPath'

type Path = number | string | Array<number | string>

export default (path: Path, obj: any) => {
  if (!obj) return undefined

  let parsedPath
  if (typeof path === 'number') {
    parsedPath = [path]
  } else if (typeof path === 'string') {
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
}
