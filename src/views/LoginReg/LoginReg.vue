<template>
  <div class="login-reg-container">
    <div class="login-header">
      <span>登录</span>
      <router-link :to="{ name: 'login' }">没有账号立即注册？</router-link>
      <el-divider></el-divider>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginReg",
  setup() {
    return {};
  },
  components: {},
});
</script>

<style lang="scss" scope>
.login-reg-container {
  background: #fff;
  padding: 5px;
  .login-header {
    * {
      line-height: 33px;
    }
    & :nth-child(1) {
      font-size: 14px;
      font-weight: 800;
    }
    & :nth-child(2) {
      font-size: 12px;
      font-weight: 400;
      float: right;
    }
  }
}
</style>