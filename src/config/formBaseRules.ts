import { required, minLength, maxLength, wordStart } from '@/utils/validators'

const pwdRule = { required, minLength: minLength(8), maxLength: maxLength(18) }
const uNameRule = {
  required,
  minLength: minLength(7),
  maxLength: maxLength(18),
  wordStart,
}
export { pwdRule, uNameRule }
