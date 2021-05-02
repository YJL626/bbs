import { Ref } from 'vue-demi'

type emit = (event: string, ...args: unknown[]) => void
type formState = {
  state: string //接受$v model属性的映射
  errMessage: string
}
enum loginState {
  none,
  err,
  success,
}

enum registerState {
  none,
  err,
  success,
}
type storeState = {
  token: string
  [name: string]: any
}
export { loginState, storeState, registerState }
