import axios from 'axios'
import { baseUrl } from '@/config/base.config'
const mAxios = axios.create({
  baseURL: baseUrl,
})
mAxios.interceptors.response.use((response) => {
  return response.data
})
export { mAxios }
