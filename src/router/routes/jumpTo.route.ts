import { RouteRecordRaw } from 'vue-router'

const jumpTo = import('@/components/common/JumpTo.vue')
const route: RouteRecordRaw = {
  name: 'jumpTo',
  path: '/jumpTo',
  component: jumpTo,
  props: true,
}
export default route
