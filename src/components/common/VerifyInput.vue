<template>
  <div class="box">
    <div class="verify-container">
      <el-input :placeholder="placeholder" v-model="v$.$model">
        <template #prepend>{{ title }}</template>
      </el-input>
      <div
        class="captcha-container"
        @click="captcha.refresh"
        v-html="captcha.captchaHtml"
      ></div>
      <br />
    </div>
    <el-collapse-transition>
      <el-alert
        v-if="errMessage"
        :closable="false"
        type="warning"
        :description="errMessage"
      ></el-alert>
    </el-collapse-transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { Captcha } from '@/network/userPage/getCaptcha'
import { Validation } from '@vuelidate/core'
import { debounce } from 'lodash'
export default defineComponent({
  name: 'VerifyInput',
  props: {
    title: { type: String, default: '验证码' },
    errTittle: { type: String, default: '验证码错误' },
    placeholder: { type: String, default: '请输入验证码' },
    v: { type: Object, required: true },
    captcha: { type: Captcha, required: true },
  },
  setup(props) {
    const v$ = props.v as Validation
    const errMessage = ref('')
    //避免错误消息的闪烁，对错误消息的更新进行防抖，仅接受最后一次进行更新
    const setErrMsg = debounce(
      (value: any) => (errMessage.value = value),
      400,
      { trailing: true }
    )
    watch(
      () => v$.$errors,
      () => (v$.$error ? setErrMsg(v$.$errors[0].$message) : setErrMsg(''))
    )
    return { v$, errMessage }
  },
  components: {},
})
</script>

<style lang="scss" scope>
.box {
  height: 65px;
  margin: 0 auto;

  .verify-container {
    display: flex;

    .el-input {
      overflow: hidden;
      .el-input-group__prepend {
        box-sizing: border-box;
        width: 110px;
        user-select: none;
        text-align: center;
      }
    }
    .captcha-container {
      svg {
        height: 40px;
        width: 90px;
        cursor: pointer;
        vertical-align: middle;
      }
    }
  }
}
.el-alert {
  height: 20px;
  font-size: 5px;
  justify-content: center;
  margin: 0;
  p {
    margin: 0;
    width: 100%;
  }
}
</style>
