import { netWorkState } from '@/type'
import { noop } from 'lodash'
import { req } from '..'

class ForgetPwdMailCtr {
  private _state: netWorkState = netWorkState.none
  get state() {
    return this._state
  }
  async getMail(
    email: string,
    { success = noop, err = noop }: { success?: () => void; err?: () => any }
  ) {
    this._state = netWorkState.pending
    await req
      .get('forgetPwd', { params: { email } })
      .then(() => {
        this._state = netWorkState.success
        success()
      })
      .catch(() => {
        this._state = netWorkState.err
        err()
      })
  }
}
export { ForgetPwdMailCtr }
