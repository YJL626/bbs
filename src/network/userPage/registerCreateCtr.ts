import { netWorkState } from '@/type'
import { noop } from 'lodash'
import { req } from '..'
class RegisterCreateController {
  protected _state: netWorkState = netWorkState.none
  get state() {
    return this._state
  }
  async create(
    token: string,
    {
      success = noop,
      err = noop,
      finallyRun = noop,
    }: { success?: () => any; err?: () => any; finallyRun?: () => any }
  ) {
    //标记开始已开始请求
    this._state = netWorkState.pending
    await req
      .post(
        'register/create',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      //更新状态,执行回调
      .then(() => {
        this._state = netWorkState.success
        success()
      })
      .catch(() => {
        this._state = netWorkState.err
        err()
      })
    finallyRun()
  }
}
export { RegisterCreateController }
