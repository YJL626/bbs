<template>
  <nav-header></nav-header>
  <el-divider></el-divider>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavHeader from "@/views/NavHeader/NavHeader.vue";
export default defineComponent({
  name: "App",
  setup() {
    return {};
  },
  components: { NavHeader },
});
</script>

<style lang="scss" scope>

body .el-divider {
  margin: 0;
}
.content{
  max-width: 1366px;
  margin: 0 auto;
}
</style>