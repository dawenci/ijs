import _type from './_type'

const isArgs = test => _type(test) === 'Arguments'
const toArray = args => Array.prototype.slice.call(args)

export default function concat(list1, list2) {
  const result = typeof list1 === 'string' ? '' : []
  if (isArgs(list1)) list1 = toArray(list1)
  if (isArgs(list2)) list2 = toArray(list2)
  return result.concat(list1, list2)
}
