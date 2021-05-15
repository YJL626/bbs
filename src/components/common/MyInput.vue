<template>
  <div class="my-input-container">
    <el-input
      :placeholder="placeholder"
      v-model="v$.$model"
      :show-password="password"
    >
      <template #prepend>{{ title }}</template>
    </el-input>
    <el-collapse-transition>
      <el-alert
        v-show="errMessage"
        :description="errMessage"
        :closable="false"
        type="error"
      />
    </el-collapse-transition>
  </div>
</template>

<script lang="ts">
/* eslint-disable vue/no-mutating-props */
import { defineComponent, ref, watch } from 'vue'
import { debounce } from 'lodash'
import { Validation } from '@vuelidate/core'

export default defineComponent({
  name: 'myInput',
  props: {
    v: {
      type: Object,
      required: true,
    },
    placeholder: { type: String, default: '请输入内容' },
    password: { type: Boolean, default: false },
    title: { type: String, default: 'input err' },
  },
  setup(props) {
    const v$ = props.v as Validation
    const errMessage = ref('')
    //避免错误消息的闪烁，对错误消息更新进行防抖，仅接受最后一次进行更新
    const setErrMsg = debounce(
      (value: any) => (errMessage.value = value),
      400,
      { trailing: true }
    )
    watch(
      () => v$.$errors,
      () => (v$.$error ? setErrMsg(v$.$errors[0].$message) : setErrMsg(''))
    )
    return { errMessage, v$ }
  },
})
</script>

<style lang="scss" scope>
.my-input-container {
  margin: 0;

  height: 65px;
  .el-input {
    overflow: hidden;
    margin-bottom: 1px;
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
  .el-input-group__prepend {
    box-sizing: border-box;
    user-select: none;
    width: 110px;
    text-align: center;
  }
}
</style>
