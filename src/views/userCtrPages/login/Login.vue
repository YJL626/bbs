<template>
  <UserPageBase :header="header" :tabsData="tabsData" />
</template>
<script lang="ts">
import { defineComponent } from 'vue-demi'

import UserPageBase from '@/views/userCtrPages/UserPageBase.vue'
import EmailLoginVue from './childComponents/EmailLogin.vue'
import { UserPageHeaderProp, UserPageTabsProp } from '../UserPageProps'
export default defineComponent({
  setup() {
    const header = new UserPageHeaderProp({
      right: { targetRouteName: 'register', value: '没有账号立即注册' },
      left: '登录',
    })
    const tabsData = new UserPageTabsProp([
      { title: '邮箱登录', component: EmailLoginVue },
    ])
    return { header, tabsData }
  },
  components: {
    UserPageBase,
  },
})
</script>
<style lang="scss" scope></style>
