
export default function isSequence(test): boolean {
  if (Array.isArray(test)) return true
  if (typeof test === 'string') return true
  if (!test) return false
  if (test.length === 0 && typeof test !== 'function') return true
  if (test.length > 0) return test.hasOwnProperty(0) && test.hasOwnProperty(test.length - 1)
  return false
}
