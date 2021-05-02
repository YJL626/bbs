import { useVuelidate } from "@vuelidate/core";
import { helpers } from "@vuelidate/validators";
import { reactive, toRef } from "vue-demi";

import { email, required, minLength, maxLength } from "@/utils/validators";
import { Captcha } from "@/network/getCaptcha";
class ForgetFormState {
  email = "";
  confirmEmail = "";
  captcha = "";
  captchaInfo = new Captcha().init();
  rules = {
    email: { required, email },
    confirmEmail: {
      required,
      email,
      confirmInput: helpers.withMessage(
        "邮箱输入不一致",
        (value: any) => this.email === value
      ),
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
}

export { ForgetFormState };
