<template>
  <div class="register-container">
    <div class="register-header">
      <span>注册</span>
      <router-link :to="{ name: 'login' }">登录</router-link>
      <el-divider></el-divider>
    </div>
    <el-tabs type="border-card">
      <el-tab-pane label="注册">
        <div class="input-container">
          <my-input
            :v="v$.userName"
            title="用户名"
            :form-states="registerFormState"
            property="userName"
            placeholder="请输入注册用户名"
            error-tittle="用户名错误"
          />
          <my-input
            :v="v$.email"
            title="用户名"
            :form-states="registerFormState"
            property="email"
            placeholder="请输入注册邮箱"
            error-tittle="邮箱错误"
          />
          <my-input
            :v="v$.nickName"
            title="昵称"
            :form-states="registerFormState"
            property="nickName"
            placeholder="输入昵称"
            error-tittle="昵称错误"
          />
          <my-input
            :v="v$.password"
            title="密码"
            :form-states="registerFormState"
            property="password"
            placeholder="请输入密码"
            error-tittle="密码错误"
            password
          />
          <my-input
            :v="v$.confirmPassWord"
            title="确认密码"
            :form-states="registerFormState"
            property="confirmPassWord"
            placeholder="请输入再次输入密码"
            error-tittle="密码错误"
            password
          />
          <verify-input
            :v="v$.captcha"
            :form-states="registerFormState"
            property="captcha"
            :captcha="registerFormState.captchaInfo"
          />
          <el-button type="primary">注册</el-button>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import myInput from '@/components/userControlInput/MyInput.vue'
import VerifyInput from '@/components/VerifyInput.vue'
import { registerFormState, v$ } from './utils/registerFormState'
import { formState } from '@/type'
export default defineComponent({
  name: 'Register',
  setup() {
    return { registerFormState, v$ }
  },
  components: { myInput, VerifyInput },
  methods: {
    ayncState({
      formState,
      value,
    }: {
      formState: formState
      value: string
    }) {
      formState.state = value
    },
  },
})
</script>

<style lang="scss" scope>
.register-container {
  background-color: #fff;
  padding: 5px;
  overflow: hidden;
  .register-header {
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
    .el-divider {
      margin: 0;
    }
  }
  .el-tabs {
    margin-top: 20px;
    margin-bottom: 50px;
    .input-container {
      margin: 0 auto;
    }
    .el-tab-pane {
      margin: 0 auto;
      max-width: 333px;
      min-height: 400px;
    }
  }
}
.el-button {
  display: block;
  width: 100%;
  margin: 0 auto;
  span {
    color: #fff;
  }
}
</style>
