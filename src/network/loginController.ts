import { loginState } from '@/type'
import { mAxios } from '.'
import { noop, result } from 'lodash'

class LoginController {
  protected _state: loginState = loginState.none
  get state() {
    return this._state
  }
  async emailLogin(
    loginForm: {
      email: string
      pwd: string
    },
    {
      success = noop,
      err = noop,
    }: { success?: (token: string) => any; err?: Function }
  ) {
    const token = await mAxios
      .post('/login/email', loginForm)
      .then((data: any) => data.token as string)
      .catch((err) => '')
    if (token) {
      this._state = loginState.success
      success(token)
    } else {
      this._state = loginState.err
      err()
    }
  }
  clearState() {
    this._state = loginState.none
  }
}
const loginController = new LoginController()

export { loginController }
