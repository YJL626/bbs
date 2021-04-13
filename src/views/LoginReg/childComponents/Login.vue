<template>
  <div class="login-contaier">
    <div class="box">
      <el-input v-model="input" placeholder="请输入用户名">
        <template #prepend>用户名</template>
      </el-input>
    </div>
    <div class="box">
      <el-input v-model="input" placeholder="请输入密码">
        <template #prepend>密码</template>
      </el-input>
    </div>
    <div class="captcha-box">
      <el-input v-model="input" placeholder="请输入验证码">
        <template #prepend>验证码</template>
      </el-input>
      <div
        class="captcha"
        @click="captcha.refresh"
        v-html="captcha.captchaHtml"
      ></div>
    </div>
    <el-button type="primary">立即登录</el-button>
    <div class="bottom-box">
      <el-link type="primary" :underline="false">忘记密码？</el-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { Captcha } from "@/network/getCaptcha";

export default defineComponent({
  name: "Login",
  setup() {
    const value = ref("10000");
    const captcha = reactive(new Captcha());
    captcha.init();
    return { value, captcha };
  },
  components: {},
});
</script>

<style lang="scss" scope>
.login-contaier {
  max-width: 80%;
  min-width: 350px;
  margin: 0 auto;
  .box {
    min-width: 350px;
    margin-bottom: 12px;
    .el-input-group__prepend {
      box-sizing: border-box;
      color: rgb(56, 55, 55);
      width: 110px;
    }
    .el-input__inner {
      margin: 0;
      max-width: 240px;
    }
  }
  .captcha-box {
    min-width: 350px;
    margin-bottom: 12px;
    .el-input-group__prepend {
      box-sizing: border-box;
      color: rgb(56, 55, 55);
      width: 110px;
    }
    .el-input-group {
      width: auto;
    }
    .el-input__inner {
      margin: 0;
      max-width: 140px;
    }
    .captcha {
      display: inline-block;

      svg {
        cursor: pointer;
        vertical-align: middle;
        height: 40px;
        width: 100px;
      }
    }
  }
  .el-button {
    width: 350px;
  }
  .bottom-box {
    width: 350px;
    & > :nth-last-child(1) {
      float: right;
      line-height: 40px;
    }
  }
}
</style>