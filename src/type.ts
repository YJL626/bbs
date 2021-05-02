import { Ref } from "vue-demi";

type unRef<T> = T extends Ref<any> ? any : T;
enum loginState {
  none,
  err,
  success,
}

enum registerState {
  none,
  pending,
  err,
  success,
}
type storeState = {
  token: string;
  [name: string]: any;
};
export { loginState, storeState, registerState, unRef };
