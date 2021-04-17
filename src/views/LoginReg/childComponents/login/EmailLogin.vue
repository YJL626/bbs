<template>
  <div class="login-contaier">
    <div class="box">
      <el-input v-model.lazy="nameState" placeholder="请输入用户名">
        <template #prepend>登录邮箱</template>
      </el-input>
      <el-collapse-transition>
        <el-alert
          title="账号输入错误"
          type="warning"
          :description="errMessage.name"
          show-icon
          :closable="false"
          v-show="errMessage.name"
        >
        </el-alert>
      </el-collapse-transition>
    </div>

    <div class="box">
      <el-input v-model="passwordState" placeholder="请输入密码" show-password>
        <template #prepend>密码</template>
      </el-input>
      <el-collapse-transition>
        <el-alert
          title="密码输入错误"
          type="warning"
          :description="errMessage.password"
          show-icon
          :closable="false"
          v-show="errMessage.password"
        >
        </el-alert>
      </el-collapse-transition>
    </div>
    <div class="box captcha-box">
      <el-input v-model="input" placeholder="请输入验证码">
        <template #prepend>验证码</template>
      </el-input>
      <div
        class="captcha"
        @click="captcha.refresh"
        v-html="captcha.captchaHtml"
      ></div>
    </div>
    <el-collapse-transition>
      <el-alert
        title="输入错误"
        type="warning"
        :description="errMessage.name"
        show-icon
        :closable="false"
        v-show="errMessage.name"
      >
      </el-alert>
    </el-collapse-transition>
    <el-button type="primary">立即登录</el-button>
    <div class="bottom-box">
      <el-link type="primary" :underline="false">忘记密码？</el-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { Captcha } from "@/network/getCaptcha";
import { loginFormState } from "./formState";
import FormError from "@/views/LoginReg/childComponents/login/FormError.vue";

export default defineComponent({
  name: "EmailLogin",
  setup() {
    const captcha = reactive(new Captcha());
    captcha.init();

    return { ...loginFormState, captcha };
  },
  components: { FormError },
});
</script>

<style lang="scss" scope>
</style>