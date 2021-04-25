<template>
  <div class="forget-container">
    <el-tabs type="border-card">
      <el-tab-pane label="忘记密码"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import myInput from "@/components/userControlInput/MyInput.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "ForgetPassword",
  setup() {
    return {};
  },
  components: { myInput },
});
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
  }
}
</style>