import { mAxios } from '.'
import { noop } from 'lodash'
import { registerState } from '@/type'
class RegisterController {
  protected _state: registerState = registerState.none
  get state() {
    return this._state
  }
  async register(
    registerForm: {
      email: string
      pwd: string
      nickName: string
      name: string
    },
    {
      success = noop,
      err = noop,
    }: { success?: (result?: string) => void; err?: () => void }
  ) {
    //标记状态
    this._state = registerState.pending
    const result = await mAxios
      .post<string>('/register', registerForm)
      .then((result) => result.data)
      .catch(() => '')
    if (result) {
      this._state = registerState.success
      success(result)
    } else {
      this._state = registerState.err
      err()
    }
  }
  clearState() {
    this._state = registerState.none
  }
}

export { RegisterController }
