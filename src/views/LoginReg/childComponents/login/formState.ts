import { email, required, minLength, maxLength } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { isProxy, reactive, readonly, Ref, toRef, watchEffect } from "vue-demi";
declare type state = {
  name: string | Ref<string>;
  password: string | Ref<string>;
};
const state = {
  name: "",
  password: "",
};
let a: any;
class LoginFormState {
  errMessage: state;
  nameState: Ref<string>;
  passwordState: Ref<string>;
  $v: any;

  constructor(state: state) {
    state = reactive(state);
    const rules = {
      name: { required, email },
      password: { required, minLength: minLength(8), maxLength: maxLength(18) },
    };
    this.errMessage = reactive({ ...state });
    const $v = useVuelidate(rules, state);
    this.$v = $v;

    this.nameState = toRef($v.value.name, "$model") as Ref<string>;
    this.passwordState = toRef($v.value.password, "$model") as Ref<string>;

    watchEffect(() => {
      //有一个被执行成功，函数会返回true,后续不会执行
      checkErr(!$v.value.name.$error, this.errMessage, "name", "") ||
        checkErr(
          $v.value.name.required.$invalid,
          this.errMessage,
          "name",
          "用户名不得为空"
        ) ||
        checkErr(
          $v.value.name.email.$invalid,
          this.errMessage,
          "name",
          "请输入正确的邮箱"
        );
    });
    watchEffect(() => {
      //有一个被执行成功，函数会返回true,后续不会执行
      checkErr(!$v.value.password.$error, this.errMessage, "password", "") ||
        checkErr(
          $v.value.password.required.$invalid,
          this.errMessage,
          "password",
          "密码不得为空"
        ) ||
        checkErr(
          $v.value.password.minLength.$invalid,
          this.errMessage,
          "password",
          "密码不得少于8位"
        ) ||
        checkErr(
          $v.value.password.maxLength.$invalid,
          this.errMessage,
          "password",
          "密码不得多于18位"
        );
    });
    function checkErr(value: any, target: any, prop: string, setValue: string) {

      if (value) {
        target[prop] = setValue;
      }

      return !!value;
    }
  }
}
const loginFormState = new LoginFormState(state);
export { loginFormState };
