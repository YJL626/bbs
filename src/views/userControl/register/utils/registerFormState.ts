import {
  email,
  required,
  minLength,
  maxLength,
} from '@/utils/validators'
import { useVuelidate } from '@vuelidate/core'
import {
  isRef,
  reactive,
  ref,
  Ref,
  toRef,
  toRefs,
  watch,
  watchEffect,
} from 'vue-demi'
import { formState } from '@/type'
import { linkModel, syncErrMsg } from '@/utils/utils'
import { Captcha } from '@/network/getCaptcha'
const captcha = new Captcha().init()
const registerFormState = reactive({
  userName: '',
  nickName: '',
  password: '',
  confirmPassWord: '',
  captcha: toRef(captcha, 'formState'),
  captchaInfo: captcha,
})
const rules = {
  userName: {
    required,
    minLength: minLength(7),
    maxLength: maxLength(15),
  },
  nickName: {
    required,
    minLength: minLength(3),
    maxLength: maxLength(10),
  },
  email: { email, required },
  password: {
    required,
    minLength: minLength(8),
    maxLength: maxLength(18),
  },
  confirmPassWord: {
    required,
    minLength: minLength(8),
    maxLength: maxLength(18),
    checkSame: (value: any) => {
      return true
    },
  },
  captcha: {
    required,
  },
}
const v$ = useVuelidate(rules, registerFormState)
export { registerFormState, v$ }
