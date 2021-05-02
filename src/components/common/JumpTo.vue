<template>
  <div class="container">
    <el-result :icon="icon" :title="title">
      <template #subTitle>
        <p>
          <router-link :to="{ name: targetRouteName }"
            >页面将在三秒后跳转,点击此处手动跳转</router-link
          >
        </p>
      </template>
    </el-result>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'jumpTo',
  props: {
    title: { type: String, default: '成功提示' },
    targetRouteName: { type: String, default: 'login' },
    icon: { type: String, default: 'success' },
  },
  setup({ targetRouteName: name }) {
    //自动跳转
    const router = useRouter()
    onMounted(() => {
      setTimeout(() => router.push({ name }), 3200)
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
