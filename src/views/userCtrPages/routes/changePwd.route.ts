import { RouteRecordRaw } from 'vue-router'

const ChangePwd = () => import('@/views/userCtrPages/changePwd/ChangePwd.vue')
const route: RouteRecordRaw = {
  name: 'changePwd',
  path: '/changePwd',
  component: ChangePwd,
}
export default route
