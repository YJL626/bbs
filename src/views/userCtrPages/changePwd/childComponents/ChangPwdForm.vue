<template>
  <form @keyup.enter="submit">
    <MyInput :v="v$.pwd" password title="密码" placeholder="请输入密码" />
    <MyInput
      :v="v$.confirmPwd"
      password
      title="密码"
      placeholder="请再次输入密码"
    />
    <VerifyInput :v="v$.captcha" :captcha="changePwdFormState.captchaInfo" />
    <elButton type="primary" @click="submit">确认修改</elButton>
  </form>
</template>
<script lang="ts">
import { defineComponent } from 'vue-demi'
import { useRoute, useRouter } from 'vue-router'

import VerifyInput from '@/components/common/VerifyInput.vue'
import MyInput from '@/components/common/MyInput.vue'

import { ChangePwdFormState } from '../changePwdFormState'
import { ChangePwdCtr } from '@/network/userPage/changePwd'
import { netWorkState } from '@/type'

export default defineComponent({
  setup() {
    const route = useRoute()
    const router = useRouter()
    const changePwdFormState = new ChangePwdFormState()
    const token = (route.query.token as string) || ''
    const changePwdCtr = new ChangePwdCtr()
    const v$ = changePwdFormState.v$
    const submit = async () => {
      const isFormCorrect = await v$.$validate()
      if (changePwdCtr.state === netWorkState.pending || !isFormCorrect) return
      const cbs = {
        success() {
          router.push({
            name: 'jumpTo',
            query: { title: '密码修改成功', targetRouteName: 'login' },
          })
        },
        err() {
          router.push({
            name: 'jumpTo',
            query: {
              title: '修改失败,请重新尝试',
              subTitle: '邮件超出有效期,请重新获取邮件',
              targetRouteName: 'forgetPassword',
              icon: 'error',
            },
          })
        },
      }
      changePwdCtr.change(
        {
          pwd: changePwdFormState.pwd,
          token,
        },
        cbs
      )
    }

    return { v$, changePwdFormState, submit }
  },
  components: { VerifyInput, MyInput },
})
</script>
<style lang="scss" scope>
.el-button {
  width: 100%;
}
</style>
