export default function _isArrayLike(test: any): boolean {
  if (Array.isArray(test)) return true
  if (!test || typeof test.length !== 'number' || typeof test === 'string') return false
  if (test.length === 0) return true
  if (test.length > 0) return test.hasOwnProperty(0) && test.hasOwnProperty(test.length - 1)
  return false
}
