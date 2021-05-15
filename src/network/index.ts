import axios from 'axios'
import { baseUrl } from '@/config/base.config'
const req = axios.create({
  baseURL: baseUrl,
})

export { req }
