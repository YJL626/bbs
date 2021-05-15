<template>
  <form class="login-contaier" @keydown.enter="submit">
    <p class="password-err" v-if="isShowPasswordErr">用户名或密码错误请重试</p>
    <my-input
      title="登录邮箱"
      errorTittle="邮箱名错误"
      :v="v$.loginEmail"
    ></my-input>
    <my-input
      title="登陆密码"
      errorTittle="密码错误"
      :v="v$.password"
      :password="true"
    />
    <VerifyInput
      errorTittle="验证码"
      :v="v$.captcha"
      :captcha="loginFormState.captchaInfo"
    />
    <el-button type="primary" @click="submit" v-on:keyup.delete="submit"
      >立即登录</el-button
    >
    <a
      class="forget-password router-link"
      @click="router.push({ name: 'forgetPassword' })"
      >忘记密码？</a
    >
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { RouteLocationRaw, useRouter } from 'vue-router'

import VerifyInput from '@/components/common/VerifyInput.vue'
import MyInput from '@/components/common/MyInput.vue'

import { LoginController } from '@/network/userPage/loginController'
import { LoginFormState } from '@/views/userCtrPages/login/utils/loginFormState'
import { SET_TOKEN } from '@/store/constant'

export default defineComponent({
  name: 'EmailLogin',
  setup() {
    const store = useStore()
    const router = useRouter()
    const isShowPasswordErr = ref(false)
    const loginFormState = new LoginFormState()
    const v$ = loginFormState.v$
    const submit = () => {
      //激活touch进行检测
      v$.$touch()

      //不符合条件return
      if (v$.$error) return
      //提取整合表单数据
      const loginForm = {
        email: loginFormState.loginEmail,
        pwd: loginFormState.password,
      }
      //login的回调
      const loginCbs = {
        success(tokena: any) {
          const target: RouteLocationRaw = {
            name: 'jumpTo',
            query: {
              icon: 'success',
              title: '登录成功',
              targetRouteName: 'login',
            },
          }
          router.push(target)
          store.commit(SET_TOKEN, tokena)
        },
        err() {
          isShowPasswordErr.value = true
          setTimeout(() => {
            isShowPasswordErr.value = false
          }, 8000)
        },
      }
      new LoginController().emailLogin(loginForm, loginCbs)
    }

    return {
      loginFormState,
      v$,
      router,
      isShowPasswordErr,
      submit,
      store,
    }
  },
  components: { MyInput, VerifyInput },
  methods: {},
})
</script>

<style lang="scss" scope>
@import '@/scss/variable.scss';
.el-tabs {
  max-width: 900px;
  margin: 0 auto;
}
.login-contaier {
  width: 318px;
  margin: 20px auto 0 auto;
  position: relative;

  .el-alert {
    padding: 8px 15px !important;
    width: 318px;
  }
  .password-err {
    position: absolute;
    top: -20px;
    margin: 0;
    z-index: 1;
    color: $danger-color;
    text-align: center;
    width: 100%;
    font-size: $supplementaryText;
  }
  .box {
    .el-input-group__prepend {
      box-sizing: border-box;
      width: 110px;
    }
    .el-input__inner {
      margin: 0;
      max-width: 240px;
    }
  }
  .captcha-box {
    min-width: 300px;

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
