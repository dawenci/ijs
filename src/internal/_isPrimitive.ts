export default function (test) {
  const type = typeof test
  return test === null || type !== 'object' && type !== 'function'
}
