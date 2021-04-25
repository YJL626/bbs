import {
  email as email1,
  required as required1,
  minLength as minLength1,
  maxLength as maxLength1,
  helpers,
} from '@vuelidate/validators'
const email = helpers.withMessage('请输入合法的邮箱地址', email1)
const required = helpers.withMessage('该字段不得为空', required1)
const minLength = (length: number) =>
  helpers.withMessage(`不得少于${length}位`, minLength1(length))
const maxLength = (length: number) =>
  helpers.withMessage(`不得多于${length}位`, maxLength1(length))
const wordStart = helpers.withMessage(
  '必须以字母开头',
  helpers.regex('wordStart', /^\w/)
)
const hasWord = helpers.withMessage(
  '必须含有字母',
  helpers.regex('wordStart', /\w/)
)
const isSameCode = (target: any, prop: string) => {
  return helpers.withMessage(
    '验证码不一致',
    (value: any) => value === target[prop]
  )
}
export { email, required, minLength, maxLength, isSameCode }
