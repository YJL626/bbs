<template>
  <div id="header">
    <el-header>
      <img class="logo" src="@/assets/logo.png" alt="" />
      <el-menu
        :default-active="1"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        text-color="#303133"
      >
        <el-menu-item index="1">论坛</el-menu-item>
        <el-menu-item index="2">签到</el-menu-item>
        <el-menu-item index="3">黑名单</el-menu-item>
        <el-submenu index="4">
          <template #title>其他</template>
          <el-menu-item index="4-1">选项1</el-menu-item>
          <el-menu-item index="4-2">选项2</el-menu-item>
          <el-menu-item index="4-3">选项3</el-menu-item>
          <el-submenu index="4-4">
            <template #title>选项4</template>
            <el-menu-item index="4-4-1">选项1</el-menu-item>
            <el-menu-item index="4-4-2">选项2</el-menu-item>
            <el-menu-item index="4-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
      <div class="login-reg">
        <p><router-link :to="{ name: 'login' }">111</router-link></p>
        <p><router-link :to="{ name: 'register' }">regiter</router-link></p>
      </div>
    </el-header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "",
  setup() {
    return {};
  },
  components: {},
});
</script>

<style lang="scss" scope>
#header {
  margin: 0 auto;
  background-color: #fff;
  * {
    user-select: none;
  }
  .el-header {
    margin: 0 auto;
    max-width: 1366px;
    .logo {
      display: none;
    }
    .el-menu {
      max-width: 1366px;
      margin: 0 auto;
      border-bottom: none;
      .is-active {
        color: #409eff;
      }
      @media screen and (min-width: 768px) {
        li,
        div {
          font-weight: 400;
          font-size: 16px;
          height: 84px;
          line-height: 84px;
        }
      }
    }
    .login-reg {
      display: flex;
      margin-right: 15px;
      p {
        margin: 0 10px;
        line-height: 84px;
      }
    }
    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: space-around;
      height: 84px !important;
      .logo {
        display: block;
      }
    }
  }
  .el-divider {
    margin: 0;
  }
}
</style>