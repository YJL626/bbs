<template>
  <JumpTo
    :title="option.title"
    :subTitle="option.subTitle"
    :targetRouteName="option.targetRouteName"
    :icon="option.icon"
  ></JumpTo>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import JumpTo from '@/components/common/JumpTo.vue'
import { useRouter } from 'vue-router'
import { RegisterCreateController } from '@/network/userPage/registerCreateCtr'
export default defineComponent({
  name: 'RegisterCreate',
  props: {
    token: { type: String, default: '' },
  },
  setup(props) {
    //REF可以在重新赋值的时候可以保持响应
    const router = useRouter()
    const option = ref({
      title: '正在注册',
      subTitle: '页面将在注册成功五秒后跳转',
      targetRouteName: '',
      icon: 'warning',
    })
    const successOption = {
      title: '注册成功',
      subTitle: '页面将在五秒后跳转至登录页面',
      targetRouteName: 'login',
      icon: 'success',
    }
    const errOption = {
      title: '注册失败',
      subTitle: '页面将在五秒后跳转至注册页面',
      targetRouteName: 'register',
      icon: 'error',
    }
    new RegisterCreateController().create(props.token, {
      success() {
        option.value = successOption
      },
      err() {
        option.value = errOption
      },
      finallyRun() {
        setTimeout(() => {
          router.push({ name: option.value.targetRouteName })
        }, 5200)
      },
    })

    return { option }
  },
  components: { JumpTo },
})
</script>

<style lang="scss" scope></style>
