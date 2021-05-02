import {
  email,
  required,
  minLength,
  maxLength,
  hasWord,
  wordStart,
  checkMailboxExist,
  checkUserNameExist,
} from '@/utils/validators'
import { useVuelidate } from '@vuelidate/core'
import { reactive, toRef } from 'vue-demi'
import { Captcha } from '@/network/getCaptcha'
import { helpers } from '@vuelidate/validators'
const captcha = new Captcha().init()
const registerFormState = reactive({
  email: '',
  userName: '',
  nickName: '',
  password: '',
  confirmPassWord: '',
  captcha: toRef(captcha, 'formState'),
  captchaInfo: captcha,
})
const rules = {
  email: { email, required, checkMailboxExist },
  userName: {
    required,
    minLength: minLength(7),
    maxLength: maxLength(15),
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
      '两次输入的密码不一致请检查',
      (value: any) => registerFormState.password === value
    ),
  },
  captcha: {
    required,
    checkCaptcha: helpers.withMessage(
      '验证码错误',
      (value: any) =>
        registerFormState.captchaInfo.captchaValue.toLocaleLowerCase() ===
        value.toLocaleLowerCase()
    ),
  },
}

const v$ = useVuelidate(rules, registerFormState)
export { registerFormState, v$ }
