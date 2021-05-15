<template>
  <form class="input-conteir" @keyup.enter="submit">
    <myInput :v="v$.email" placeholder="请输入注册邮箱" title="注册邮箱" />
    <myInput
      :v="v$.confirmEmail"
      placeholder="再次输入邮箱以确认"
      title="确认输入"
    />
    <VerifyInput :v="v$.captcha" :captcha="forgetFormState.captchaInfo" />
    <el-button type="primary" @click="submit">登录</el-button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi'
import myInput from '@/components/common/MyInput.vue'
import VerifyInput from '@/components/common/VerifyInput.vue'
import { ForgetFormState } from '@/views/userCtrPages/forgetPassword/forgetFormState'
import { ForgetPwdMailCtr } from '@/network/userPage/getForgetPwdMail'
import { netWorkState } from '@/type'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'ForgetPasswordContent',
  setup() {
    const router = useRouter()
    const forgetFormState = new ForgetFormState()
    const v$ = forgetFormState.v$
    const forgetPwdMailCtr = new ForgetPwdMailCtr()

    const submit = async () => {
      const isFormCorrect = await v$.$validate()
      if (!isFormCorrect || forgetPwdMailCtr.state === netWorkState.pending)
        return
      forgetPwdMailCtr.getMail(forgetFormState.email, {
        success() {
          router.push({
            name: 'jumpTo',
            query: { title: '邮件已发送请点击邮箱邮件注册' },
          })
        },
      })
    }
    return { forgetFormState, v$, submit }
  },
  components: { VerifyInput, myInput },
})
</script>

<style lang="scss" scope>
.forget-container {
  width: 100%;
  background: #fff;
  border-radius: 2px;
  overflow: hidden;
  min-height: 80vh;
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
  .el-tabs {
    margin-top: 20px;
    margin-bottom: 50px;
  }
}
.el-button {
  width: 100%;
  * {
    color: #fff;
  }
}
</style>
