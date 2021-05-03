<template>
  <form class="register-container">
    <div class="register-header">
      <span>注册</span>
      <router-link :to="{ name: 'login' }">登录</router-link>
      <el-divider></el-divider>
    </div>
    <el-tabs type="border-card">
      <el-tab-pane label="注册">
        <div class="input-container">
          <p class="err-msg" v-show="showRegisterErrMsg">
            注册失败,请更改用户名,邮箱后重试
          </p>
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
            title="登录邮箱"
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
          <el-button type="primary" @click="submit">注册</el-button>
        </div>
      </el-tab-pane>
    </el-tabs>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import myInput from '@/components/userControlInput/MyInput.vue'
import VerifyInput from '@/components/common/VerifyInput.vue'
import { RegisterFormState } from './utils/registerFormState'
import { RegisterController } from '@/network/registerController'
import { useRouter } from 'vue-router'
import { registerState } from '@/type'
export default defineComponent({
  name: 'Register',
  setup() {
    const registerController = new RegisterController()
    const showRegisterErrMsg = ref(false)
    const registerFormState = new RegisterFormState()
    const v$ = registerFormState.v$
    const router = useRouter()
    const submit = () => {
      //pending正在进行的请求则忽略
      if (registerController.state === registerState.pending) return
      v$.$touch()
      const registerForm = {
        name: registerFormState.userName,
        nickName: registerFormState.nickName,
        email: registerFormState.email,
        pwd: registerFormState.password,
      }
      const cbs = {
        success: () => {
          router.push({
            name: 'jumpTo',
            query: {
              icon: 'success',
              title: '注册邮件以发送,请打开邮件进行注册',
              subTitle: '将在五秒后跳转后登录页面',
              targetRouteName: 'login',
            },
          })
        },
        err() {
          console.log('err')
          showRegisterErrMsg.value = true
          setTimeout(() => (showRegisterErrMsg.value = false), 8000)
        },
      }
      registerController.register(registerForm, cbs)
    }
    return { registerFormState, v$, submit, showRegisterErrMsg }
  },
  components: { myInput, VerifyInput },
})
</script>

<style lang="scss" scope>
@import '@/scss/variable.scss';
.register-container {
  background-color: #fff;
  padding: 5px;
  overflow: hidden;
  min-height: 80vh;
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
    max-width: 900px;
    margin: 0 auto;
    .input-container {
      margin: 18px auto 15px;
      position: relative;
      .err-msg {
        position: absolute;
        top: -20px;
        z-index: 1;
        width: 100%;
        font-size: $bodySmall;
        color: $danger-color;
        text-align: center;
      }
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
