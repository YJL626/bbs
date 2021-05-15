import { helpers } from '@vuelidate/validators'

import { email, required } from '@/utils/validators'
import { Captcha } from '@/network/userPage/getCaptcha'
import { reactive } from 'vue-demi'
import useVuelidate, { Validation } from '@vuelidate/core'
type ForgetFormStateVType = Validation<
  ForgetFormState['rules'],
  ForgetFormState
>

class ForgetFormState {
  email = ''
  confirmEmail = ''
  captcha = ''
  captchaInfo = new Captcha().init()
  v$: ForgetFormStateVType
  rules = {
    email: { required, email },
    confirmEmail: {
      required,
      email,
      confirmInput: helpers.withMessage(
        '邮箱输入不一致',
        (value: any) => this.email === value
      ),
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
    const reactiveThis = reactive(this)
    this.v$ = (useVuelidate(
      this.rules,
      reactiveThis
    ) as any) as ForgetFormStateVType

    return reactiveThis
  }
}

export { ForgetFormState }
