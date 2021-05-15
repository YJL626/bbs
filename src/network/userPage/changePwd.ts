import { netWorkState } from '@/type'
import { noop } from 'lodash'
import { req } from '..'

class ChangePwdCtr {
  private _state = netWorkState.none
  get state() {
    return this._state
  }
  async change(
    { pwd, token }: { pwd: string; token: string },
    { success = noop, err = noop }: { success?: () => void; err?: () => void }
  ) {
    await req
      .patch(
        '/forgetPwd',
        { pwd },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => {
        success()
      })
      .catch(() => {
        err()
      })
  }
}
export { ChangePwdCtr }
