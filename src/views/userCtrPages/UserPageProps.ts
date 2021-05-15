type headerBaseConfig = { targetRouteName: string; value: string }
class UserPageHeaderProp {
  left: string
  right: headerBaseConfig
  constructor(headerData: {
    left: string
    right: { targetRouteName: string; value: string }
  }) {
    this.left = headerData.left
    this.right = headerData.right
  }
}
/* ------- */
//用类注解props
class UserPageTabsProp extends Array {
  [prop: number]: { title: string; component: Record<any, unknown> }

  constructor(tabs: { title: string; component: Record<any, unknown> }[]) {
    super()
    this.push(...tabs)
  }
}
export { UserPageHeaderProp, UserPageTabsProp }
