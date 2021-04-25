import { reactive, watch } from 'vue-demi'
import { mAxios } from './request'
class Captcha {
  captchaHtml = ''
  captchaValue = ''
  formState = ''
  constructor() {
    //通过响应式的对象来更新数据
    const reactiveThis = reactive(this)
    return reactiveThis
  }
  async refresh() {
    const captchaData: { data: string; text: string } = await mAxios.get(
      '/captcha'
    )
    this.captchaHtml = captchaData.data
    this.captchaValue = captchaData.text
  }
  init() {
    this.refresh()

    return this
  }
}
export { Captcha }
