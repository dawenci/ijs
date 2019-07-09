export default (predicate: (value: any) => boolean, obj) => {
  const result = {}

  if (obj == null || predicate == null) {
    return result
  }

  for (let prop in obj) {
    const value = obj[prop]
    if (predicate(value)) result[prop] = value
  }

  return result
}
