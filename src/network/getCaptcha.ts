import { reactive, watch } from 'vue-demi'
import { mAxios } from '.'
class Captcha {
  captchaHtml = '<svg></svg>'
  captchaValue = ''
  formState = ''
  constructor() {
    //通过响应式的对象来更新数据
    const reactiveThis = reactive(this)
    return reactiveThis
  }
  async refresh() {
    const captchaData: {
      data: string
      text: string
    } = await mAxios.get('/captcha')

    this.captchaHtml = captchaData.data || this.captchaHtml
    this.captchaValue = captchaData.text || this.captchaValue
  }
  init() {
    this.refresh()
    return this
  }
}
export { Captcha }
