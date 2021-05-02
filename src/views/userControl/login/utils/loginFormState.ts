import { useVuelidate, Validation } from "@vuelidate/core";
import { helpers } from "@vuelidate/validators";
import { reactive, toRef } from "vue-demi";

import { email, required, minLength, maxLength } from "@/utils/validators";
import { Captcha } from "@/network/getCaptcha";

class LoginFormState {
  loginEmail = "";
  password = "";
  captcha = "";
  captchaInfo = new Captcha().init();
  $v: Validation<LoginFormState["rules"], LoginFormState>;
  rules = {
    loginEmail: { required, email },
    password: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(18),
    },
    captcha: {
      required,
      isSame: helpers.withMessage(
        "验证码错误",
        (value: any) =>
          this.captchaInfo.captchaValue.toLowerCase() === value.toLowerCase()
      ),
    },
  };
  constructor() {
    const reactThis = reactive(this);
    console.log(reactive({ aa: useVuelidate(reactThis.rules, reactThis) }));

    this.$v = (useVuelidate(reactThis.rules, reactThis) as any) as Validation<
      LoginFormState["rules"],
      LoginFormState
    >;
    return reactThis;
  }
}

export { LoginFormState };
