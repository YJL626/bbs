import { useVuelidate } from '@vuelidate/core'
import { helpers } from '@vuelidate/validators'
import { reactive, toRef } from 'vue-demi'

import {
  email,
  required,
  minLength,
  maxLength,
} from '@/utils/validators'
import { Captcha } from '@/network/getCaptcha'
const captcha = new Captcha().init()
const loginFormState = reactive({
  loginEmail: '',
  password: '',
  captcha: toRef(captcha, 'formState'),
  captchaInfo: captcha,
})
const rules = {
  loginEmail: { required, email },
  password: {
    required,
    minLength: minLength(8),
    maxLength: maxLength(18),
  },
  captcha: {
    required,
    isSame: helpers.withMessage('验证码错误', (value: any) => {
      return (
        captcha.captchaValue.toLowerCase() ===
        (value as string).toLowerCase()
      )
    }),
  },
}
const loginV$ = useVuelidate(rules, loginFormState)

export { loginV$, loginFormState }
