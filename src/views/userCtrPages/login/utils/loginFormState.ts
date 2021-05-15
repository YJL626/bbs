import { useVuelidate, Validation } from '@vuelidate/core'
import { helpers } from '@vuelidate/validators'
import { reactive } from 'vue-demi'

import { email, required, minLength, maxLength } from '@/utils/validators'
import { Captcha } from '@/network/userPage/getCaptcha'
type loginFormStateVType = Validation<LoginFormState['rules'], LoginFormState>
class LoginFormState {
  loginEmail = ''
  password = ''
  captcha = ''
  captchaInfo = new Captcha().init()
  v$: loginFormStateVType
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
        '验证码错误',
        (value: any) =>
          this.captchaInfo.captchaValue.toLowerCase() === value.toLowerCase()
      ),
    },
  }
  constructor() {
    const reactThis = reactive(this)
    this.v$ = (useVuelidate(
      reactThis.rules,
      reactThis
    ) as any) as loginFormStateVType
    return reactThis
  }
}

export { LoginFormState }
