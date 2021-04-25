<template>
  <div class="box">
    <div class="verify-container">
      <el-input
        :placeholder="placeholder"
        v-model="formState"
        @blur="v$.$touch"
      >
        <template #prepend>{{ title }}</template>
      </el-input>
      <div
        class="captcha-container"
        @click="captchaDate.refresh"
        v-html="captchaDate.captchaHtml"
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
import { computed, defineComponent, toRef, ref, watch } from 'vue'
import { Captcha } from '@/network/getCaptcha'
import { Validation } from '@vuelidate/core'
import { debounce } from 'lodash'
export default defineComponent({
  name: 'VerifyInput',
  props: {
    title: { type: String, default: '验证码' },
    errTittle: { type: String, default: '验证码错误' },
    placeholder: { type: String, default: '请输入验证码' },
    v: { type: Object, required: true },
    formStates: { default: {} },
    property: { type: String, default: '1' },
    captcha: { type: Object },
  },
  setup({ captcha, v, formStates, property }) {
    const captchaDate = captcha as Captcha
    const v$ = v as Validation
    const formState = toRef(formStates, property as never)
    const errMessage = ref('')
    //避免错误消息的闪烁，对错误消息的更新进行防抖，仅接受最后一次进行更新
    const setErrMsg = debounce(
      (value: any) => (errMessage.value = value),
      400,
      { trailing: true }
    )
    watch(
      () => v$.$errors,
      () =>
        v$.$error ? setErrMsg(v$.$errors[0].$message) : setErrMsg('')
    )
    return { captchaDate, v$, errMessage, formState }
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
    margin-bottom: 1 px;
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
  margin-bottom: 1px;
  font-size: 5px;
  justify-content: center;
  p {
    margin: 0;
    width: 100%;
  }
}
</style>
