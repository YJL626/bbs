import { RouteRecordRaw } from 'vue-router'

const userCreate = () =>
  import('@/views/userControl/register/childComponents/RegisterCreate.vue')
const route: RouteRecordRaw = {
  name: 'userCreate',
  path: '/user/create',
  component: userCreate,
  props: (route) => route.query,
}
export default route
