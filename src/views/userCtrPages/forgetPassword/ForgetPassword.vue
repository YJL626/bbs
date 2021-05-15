<template>
  <UserPageBase :header="header" :tabsData="tabs" />
</template>
<script lang="ts">
import { defineComponent } from 'vue-demi'

import UserPageBase from '@/views/userCtrPages/UserPageBase.vue'
import ForgetPasswordContent from '@/views/userCtrPages/forgetPassword/childComponents/ForgetPasswordContent.vue'

import { UserPageHeaderProp, UserPageTabsProp } from '../UserPageProps'
export default defineComponent({
  setup() {
    const header = new UserPageHeaderProp({
      left: '忘记密码',
      right: { value: '登录', targetRouteName: 'login' },
    })
    const tabs = new UserPageTabsProp([
      { title: '忘记密码', component: ForgetPasswordContent },
    ])
    return { header, tabs }
  },
  components: { UserPageBase },
})
</script>
<style lang="scss" scope></style>
