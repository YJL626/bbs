import { reactive } from 'vue-demi'
import { mAxios } from '.'
class Captcha {
  captchaHtml = '<svg></svg>'
  captchaValue = ''
  isAutoRefresh = false
  constructor() {
    //通过响应式的对象来更新数据
    const reactiveThis = reactive(this)
    return reactiveThis
  }
  async refresh() {
    const captchaData: {
      data: string
      text: string
    } = await mAxios.get('/captcha').then((result) => result.data)
    this.captchaHtml = captchaData.data || this.captchaHtml
    this.captchaValue = captchaData.text || this.captchaValue
  }
  init() {
    this.refresh()
    this.autoRefresh()
    return this
  }
  autoRefresh(intervalMs = 1000 * 60 * 15) {
    if (!this.isAutoRefresh) {
      this.isAutoRefresh = true
      setTimeout(() => {
        this.refresh()
      }, intervalMs)
    }
  }
}
export { Captcha }
