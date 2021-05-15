import { pwdRule } from '@/config/formBaseRules'
import { Captcha } from '@/network/userPage/getCaptcha'
import { required } from '@/utils/validators'
import useVuelidate, { Validation } from '@vuelidate/core'
import { helpers } from '@vuelidate/validators'
import { reactive } from 'vue-demi'
type ChangePwdValidation = Validation<
  ChangePwdFormState['rules'],
  ChangePwdFormState
>
class ChangePwdFormState {
  pwd = ''
  confirmPwd = ''
  captcha = ''
  captchaInfo = new Captcha().init()
  rules = {
    pwd: { ...pwdRule },
    confirmPwd: {
      required,
      confirmInput: helpers.withMessage(
        '密码不一致',
        (value: any) => this.pwd === value
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
  v$: ChangePwdValidation
  constructor() {
    const reactiveThis = reactive(this)
    this.v$ = (useVuelidate(
      this.rules,
      reactiveThis
    ) as unknown) as ChangePwdValidation
    return reactiveThis
  }
}
export { ChangePwdFormState }
