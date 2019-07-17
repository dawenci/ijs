import { REDUCED, VALUE } from './protocol'

export default function _reduced(x) {
  return x && x[REDUCED] ? x : { [VALUE]: x, [REDUCED]: true }
}
