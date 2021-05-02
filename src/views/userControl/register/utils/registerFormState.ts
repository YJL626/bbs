import {
  email,
  required,
  minLength,
  maxLength,
  hasWord,
  wordStart,
  checkMailboxExist,
  checkUserNameExist,
} from "@/utils/validators";
import { reactive, Ref, toRef } from "vue-demi";
import { Captcha } from "@/network/getCaptcha";
import { helpers } from "@vuelidate/validators";
import useVuelidate, { Validation } from "@vuelidate/core";

class RegisterFormState {
  email = "";
  userName = "";
  nickName = "";
  password = "";
  confirmPassWord = "";
  captcha = "";
  captchaInfo = new Captcha().init();
  v$: Validation<RegisterFormState["rules"], RegisterFormState>;
  rules = {
    email: { email, required, checkMailboxExist },
    userName: {
      required,
      minLength: minLength(7),
      maxLength: maxLength(18),
      wordStart,
      checkUserNameExist,
    },
    nickName: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(10),
    },

    password: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(18),
      hasWord,
    },
    confirmPassWord: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(18),
      hasWord,
      checkSame: helpers.withMessage(
        "两次输入的密码不一致请检查",
        (value: any) => this.password === value
      ),
    },
    captcha: {
      required,
      checkCaptcha: helpers.withMessage(
        "验证码错误",
        (value: any) =>
          this.captchaInfo.captchaValue.toLowerCase() === value.toLowerCase()
      ),
    },
  };

  constructor() {
    const reactiveThis = reactive(this);
    //响应式对象的.value会被自动解构,手动标识
    this.v$ = (useVuelidate(this.rules, reactiveThis) as any) as Validation<
      RegisterFormState["rules"],
      RegisterFormState
    >;
    return reactiveThis;
  }
}

export { RegisterFormState };
