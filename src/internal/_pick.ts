export default (props, obj) => {
  const result = {}
  if (obj == null || props == null) {
    return result
  }

  const len = props.length
  if (!len) return result

  let index = -1
  while (++index < len) {
    const prop = props[index]
    const value = obj[prop]
    if (prop in obj) result[prop] = value
  }

  return result
}
