import { Ref } from 'vue-demi'

type unRef<T> = T extends Ref<any> ? any : T

enum registerState {
  none,
  pending,
  err,
  success,
}
enum netWorkState {
  none = 'none',
  pending = 'pending',
  err = 'err',
  success = 'success',
}
type storeState = {
  token: string
  [name: string]: any
}
export { storeState, registerState, unRef, netWorkState }
