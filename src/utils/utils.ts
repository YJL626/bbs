import { Router } from 'vue-router'

const noop = () => undefined
const getPushRouterNameFn = (router: Router) => {
  return (routerName: string) => {
    router.push({ name: routerName })
  }
}
export { noop, getPushRouterNameFn }
