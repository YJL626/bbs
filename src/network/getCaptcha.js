import { mAxios } from "./request";
class Captcha {
    constructor() {
        this.captchaHtml = "";
        this.captchaValue = "";
    }
    async refresh() {
        const captchaData = await mAxios.get("/captcha");
        this.captchaHtml = captchaData.data;
        this.captchaValue = captchaData.text;
    }
    init() {
        this.refresh();
    }
}
export { Captcha };
//# sourceMappingURL=getCaptcha.js.map