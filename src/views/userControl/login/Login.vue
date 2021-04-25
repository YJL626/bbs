<template>
  <div class="login-reg-container">
    <div class="login-header">
      <span>登录</span>
      <router-link :to="{ name: 'register' }"
        >没有账号立即注册？</router-link
      >
      <el-divider></el-divider>
    </div>
    <el-tabs type="border-card">
      <el-tab-pane label="邮箱登录">
        <email-login></email-login>
      </el-tab-pane>
      <el-tab-pane label="手机号登陆">
        <p-number-login></p-number-login>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EmailLogin from '@/views/userControl/login/childComponents/EmailLogin.vue'
import PNumberLogin from '@/views/userControl/login/childComponents/PNumberLogin.vue'

export default defineComponent({
  name: 'login',
  setup() {
    return {}
  },
  components: { EmailLogin, PNumberLogin },
})
</script>

<style lang="scss" scope>
.login-reg-container {
  background: #fff;
  padding: 5px;
  min-height: 60vh;
  .el-tabs {
    min-height: 400px;
  }
  .login-header {
    margin-bottom: 30px;
    * {
      line-height: 33px;
    }
    & :nth-child(1) {
      user-select: none;
      padding-left: 10px;
      font-size: 14px;
      font-weight: 800;
    }
    & :nth-child(2) {
      padding-right: 10px;
      font-size: 12px;
      font-weight: 400;
      float: right;
    }
  }
}
</style>
