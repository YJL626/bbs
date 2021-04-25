<template>
  <div class="login-contaier">
    <my-input
      title="登录邮箱"
      errorTittle="邮箱名错误"
      :formStates="loginFormState"
      property="loginEmail"
      :v="loginV$.loginEmail"
    ></my-input>
    <my-input
      title="登陆密码"
      errorTittle="密码错误"
      :formStates="loginFormState"
      property="password"
      :v="loginV$.password"
      :password="true"
    />
    <VerifyInput
      errorTittle="验证码"
      :formStates="loginFormState"
      property="captcha"
      :v="loginV$.captcha"
      :captcha="loginFormState.captchaInfo"
    />
    <el-button
      type="primary"
      @click="submit"
      v-on:keyup.delete="submit"
      >立即登录</el-button
    >
    <a
      class="forget-password router-link"
      @click="routerPush('forgetPassword')"
      >忘记密码？</a
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  loginV$,
  loginFormState,
} from '@/views/userControl/login/utils/loginFormState'
import { routerPush } from '@/utils/utils'
import myInput from '@/components/userControlInput/MyInput.vue'

import VerifyInput from '@/components/VerifyInput.vue'

export default defineComponent({
  name: 'EmailLogin',
  setup() {
    const submit = () => {
      loginV$.value.$touch()
      if (loginV$.value.$error) return
      console.log(loginFormState)
    }
    return { loginFormState, loginV$, routerPush, submit }
  },
  components: { myInput, VerifyInput },
})
</script>

<style lang="scss" scope>
.el-tabs {
  max-width: 900px;
  margin: 0 auto;
}
.login-contaier {
  width: 318px;
  margin: 0 auto;

  .el-alert {
    padding: 8px 15px !important;
    width: 318px;
  }
  .box {
    margin-bottom: 12px;
    .el-input-group__prepend {
      box-sizing: border-box;
      color: rgb(56, 55, 55);
      width: 110px;
    }
    .el-input__inner {
      margin: 0;
      max-width: 240px;
    }
    .el-alert {
      margin-top: 5px;
    }
  }
  .captcha-box {
    min-width: 300px;
    margin-bottom: 12px;
    .el-input-group__prepend {
      box-sizing: border-box;
      color: rgb(56, 55, 55);
      width: 110px;
    }
    .el-input-group {
      width: auto;
    }
    .el-input__inner {
      margin: 0;
      max-width: 133px;
    }
    .captcha {
      display: inline-block;
      svg {
        cursor: pointer;
        vertical-align: middle;
        height: 40px;
        width: 90px;
      }
    }
  }
  .el-button {
    width: 100%;
    span {
      color: #fff;
    }
  }

  .forget-password {
    float: right;
  }
}
</style>
