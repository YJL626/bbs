import axios from "axios";
import { baseUrl } from "@/config/base.config";
const mAxios = axios.create({
    baseURL: baseUrl,
});
mAxios.interceptors.response.use((response) => {
    if (response.status > 199 && response.status < 300) {
        return response.data;
    }
    else {
        console.log("network error", response);
    }
}, (err) => {
    console.log("network error", err);
});
export { mAxios };
//# sourceMappingURL=request.js.map