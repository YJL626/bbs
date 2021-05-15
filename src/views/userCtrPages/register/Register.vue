<template>
  <UserPageBase :header="header" :tabs-data="tabs" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UserPageTabsProp, UserPageHeaderProp } from '../UserPageProps'
import UserPageBase from '@/views/userCtrPages/UserPageBase.vue'
import RegisterContent from '@/views/userCtrPages/register/childComponents/RegisterContent.vue'
export default defineComponent({
  name: 'Register',
  setup() {
    const header = new UserPageHeaderProp({
      right: { targetRouteName: 'login', value: '点击登录' },
      left: '注册',
    })
    const tabs = new UserPageTabsProp([
      { title: '注册', component: RegisterContent },
    ])
    return { header, tabs }
  },
  components: { UserPageBase },
})
</script>

<style lang="scss" scope></style>
