import { mAxios } from "./request";
class Captcha {
  captchaHtml = "";
  captchaValue = "";
  async refresh() {
    const captchaData: { data: string; text: string } = await mAxios.get(
      "/captcha"
    );
    this.captchaHtml = captchaData.data;
    this.captchaValue = captchaData.text;
  }
  init() {
    this.refresh();
  }
}
export { Captcha };
