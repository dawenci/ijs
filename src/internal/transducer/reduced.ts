import { REDUCED, VALUE, Reduced } from './protocol'

export default function _reduced<T>(obj: T | Reduced<T>): Reduced<T> {
  if (obj && obj[REDUCED]) {
    return obj as Reduced<T>
  }
  return { [VALUE]: obj as T, [REDUCED]: true }
}
