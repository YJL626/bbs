<template>
  <div class="container">
    <el-result :icon="icon" :title="title">
      <template #subTitle>
        <p>
          <router-link :to="{ name: targetRouteName }">
            {{ subTitle }}
          </router-link>
        </p>
      </template>
    </el-result>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'jumpTo',
  props: {
    title: { type: String, default: '成功提示' },
    targetRouteName: { type: String, default: 'login' },
    subTitle: { type: String, default: '页面将在五秒后跳转,点击此处手动跳转' },
    icon: { type: String, default: 'success' },
    autoJump: { type: Boolean, default: true },
  },
  setup(props) {
    //自动跳转
    const router = useRouter()
    const route = useRoute()
    onMounted(() => {
      setTimeout(() => {
        //用户手动跳转,取消自动自动跳转
        if (route.name !== 'jumpTo' || props.autoJump === false) return
        router.push({ name: props.targetRouteName })
      }, 5100)
    })
    return {}
  },
  components: {},
})
</script>

<style lang="scss" scope>
.container {
  background-color: #fff;
  min-height: 80vh;
  position: relative;

  .el-result {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    p {
      margin-top: 1px;
      a {
        color: blue;
        text-decoration: underline;
      }
    }
  }
}
</style>
