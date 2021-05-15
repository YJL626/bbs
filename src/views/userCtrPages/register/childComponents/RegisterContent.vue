<template>
  <form class="input-container" @keyup.enter="submit">
    <p class="err-msg" v-show="showRegisterErrMsg">
      注册失败,请更改用户名,邮箱后重试
    </p>
    <my-input
      :v="v$.userName"
      title="用户名"
      placeholder="请输入注册用户名"
      error-tittle="用户名错误"
    />
    <my-input
      :v="v$.email"
      title="登录邮箱"
      placeholder="请输入注册邮箱"
      error-tittle="邮箱错误"
    />
    <my-input
      :v="v$.nickName"
      title="昵称"
      placeholder="输入昵称"
      error-tittle="昵称错误"
    />
    <my-input
      :v="v$.password"
      title="密码"
      placeholder="请输入密码"
      error-tittle="密码错误"
      password
    />
    <my-input
      :v="v$.confirmPassWord"
      title="确认密码"
      placeholder="请输入再次输入密码"
      error-tittle="密码错误"
      password
    />
    <verify-input :v="v$.captcha" :captcha="registerFormState.captchaInfo" />
    <el-button type="primary" @click="submit">注册</el-button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import MyInput from '@/components/common/MyInput.vue'
import VerifyInput from '@/components/common/VerifyInput.vue'
import { RegisterFormState } from '@/views/userCtrPages/register/registerFormState'
import { RegisterController } from '@/network/userPage/registerController'
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
    const submit = async () => {
      //pending正在进行的请求则忽略
      if (registerController.state === registerState.pending) return
      const isFormCorrect = await v$.$validate()
      if (!isFormCorrect) return
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
  components: { MyInput, VerifyInput },
})
</script>

<style lang="scss" scope>
@import '@/scss/variable.scss';

.el-button {
  display: block;
  width: 100%;
  margin: 0 auto;
  span {
    color: #fff;
  }
}
</style>
