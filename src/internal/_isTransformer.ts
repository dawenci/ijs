import { INIT, RESULT, STEP } from './transducer/protocol'

export default function (test: any): boolean {
  if (typeof test !== 'object' || test == null) return false
  return test[INIT] && test[RESULT] && test[STEP]
}
