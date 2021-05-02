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
const forgetFormState = reactive({
  email: '',
  confirmEmail: '',
  captcha: toRef(captcha, 'formState'),
  captchaInfo: captcha,
})
const rules = {
  email: { required, email },
  confirmEmail: {
    required,
    email,
    confirmInput: helpers.withMessage(
      '邮箱输入不一致',
      (value: any) => forgetFormState.email === value
    ),
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
const forgetV$ = useVuelidate(rules, forgetFormState)

export { forgetV$, forgetFormState }
