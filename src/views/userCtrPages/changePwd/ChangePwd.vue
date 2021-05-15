<template>
  <UserPageBase :header="header" :tabsData="tabs" />
</template>
<script lang="ts">
import { defineComponent } from 'vue-demi'

import UserPageBase from '@/views/userCtrPages/UserPageBase.vue'
import { UserPageHeaderProp, UserPageTabsProp } from '../UserPageProps'
import ChangPwdForm from '@/views/userCtrPages/changePwd/childComponents/ChangPwdForm.vue'
export default defineComponent({
  props: { token: { type: String, default: '' } },
  setup() {
    const header = new UserPageHeaderProp({
      left: '修改密码',
      right: { value: '登录', targetRouteName: 'login' },
    })
    const tabs = new UserPageTabsProp([
      { title: '修改密码', component: ChangPwdForm },
    ])

    return { header, tabs }
  },
  components: { UserPageBase },
})
</script>
<style lang="scss" scope></style>
