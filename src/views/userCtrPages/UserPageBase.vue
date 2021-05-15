<template>
  <div class="user-page-base-container">
    <div class="user-ctr-header">
      <span class="left">{{ header.left }}</span>
      <a class="right" @click="pushRouterName(header.right.targetRouteName)">{{
        header.right.value
      }}</a>
      <el-divider></el-divider>
    </div>
    <el-tabs class="content-tabs" type="border-card">
      <el-tab-pane
        v-for="tabDate in tabsData"
        :label="tabDate.title"
        :key="tabDate.title"
        ><RenderComponent :component="tabDate.component" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts">
import { getPushRouterNameFn } from '@/utils/utils'
import { defineComponent } from 'vue-demi'
import { useRouter } from 'vue-router'

import { UserPageHeaderProp, UserPageTabsProp } from './UserPageProps'

import RenderComponent from '@/components/common/RenderComponent'
import EmailLogin from '@/views/userCtrPages/login/childComponents/EmailLogin.vue'
export default defineComponent({
  props: {
    header: { type: UserPageHeaderProp, required: true },
    tabsData: { type: UserPageTabsProp, required: true },
  },
  setup() {
    const pushRouterName = getPushRouterNameFn(useRouter())
    return { pushRouterName, EmailLogin }
  },
  components: { RenderComponent },
})
</script>
<style scope lang="scss">
.user-page-base-container {
  background: #fff;
  padding: 5px;
  min-height: 80vh;
  /* header */
  .user-ctr-header {
    margin-bottom: 30px;
    .left,
    .right {
      user-select: none;
      line-height: 33px;
    }
    .left {
      padding-left: 10px;
      font-size: 14px;
      font-weight: 800;
    }
    .right {
      cursor: pointer;
      padding-right: 10px;
      font-size: 12px;
      font-weight: 400;
      float: right;
    }
  }
  .content-tabs {
    max-width: 900px;
    margin: 0 auto;
    .el-tab-pane {
      padding: 10px;
      max-width: 318px;
      min-height: 40vh;
      margin: 0 auto;
    }
  }
}
.el-divider {
  margin: 0;
}
</style>
