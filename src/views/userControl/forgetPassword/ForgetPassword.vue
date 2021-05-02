<template>
  <div class="forget-container" @keyup.enter="submit">
    <el-tabs type="border-card">
      <el-tab-pane label="忘记密码">
        <div class="input-conteir">
          <myInput
            :v="forgetV$.email"
            :form-states="forgetFormState"
            property="email"
            placeholder="请输入注册邮箱"
            title="注册邮箱"
          />
          <myInput
            :v="forgetV$.confirmEmail"
            :form-states="forgetFormState"
            property="confirmEmail"
            placeholder="再次输入邮箱以确认"
            title="确认输入"
          />
          <VerifyInput
            :v="forgetV$.captcha"
            :form-states="forgetFormState"
            property="captcha"
            :captcha="forgetFormState.captchaInfo"
          />
        </div>
        <el-button type="primary" @click="submit">登录</el-button>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import myInput from '@/components/userControlInput/MyInput.vue'
import VerifyInput from '@/components/common/VerifyInput.vue'

import { forgetFormState, forgetV$ } from './utils/forgetFormState'
import { debounce } from 'lodash'

export default defineComponent({
  name: 'ForgetPassword',
  setup() {
    const submit = debounce(
      () => {
        console.log(forgetFormState)
      },
      400,
      { trailing: true }
    )
    return { forgetFormState, forgetV$, submit }
  },
  components: { myInput, VerifyInput },
})
</script>

<style lang="scss" scope>
.forget-container {
  width: 100%;
  background: #fff;
  border-radius: 2px;
  overflow: hidden;
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
