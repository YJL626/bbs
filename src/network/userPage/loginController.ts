import { netWorkState } from '@/type'
import { req } from '..'
import { noop } from 'lodash'

class LoginController {
  protected _state: netWorkState = netWorkState.none
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
    }: { success?: (token: string) => any; err?: () => any }
  ) {
    this._state = netWorkState.pending
    await req
      .post('/login/email', loginForm)
      .then((result) => {
        const token = result.data.token
        if (!token) throw 'err'
        this._state = netWorkState.success
        success(token)
      })
      .catch(() => {
        this._state = netWorkState.err
        err()
      })
  }
  clearState() {
    this._state = netWorkState.none
  }
}

export { LoginController }
