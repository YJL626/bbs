import { Ref } from 'vue-demi'
type unRef<T> = T extends Ref<any> ? any : T

enum registerState {
  none,
  pending,
  err,
  success,
}
enum netWorkState {
  none,
  pending,
  err,
  success,
}
type storeState = {
  token: string
  [name: string]: any
}

type myUnRef<T> = T extends Ref<infer value> ? value : T
export { storeState, registerState, unRef, netWorkState, myUnRef }
