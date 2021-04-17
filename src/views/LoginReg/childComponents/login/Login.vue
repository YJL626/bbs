<template>
  <el-tabs type="border-card">
    <el-tab-pane label="用户管理"><email-login></email-login></el-tab-pane>
    <el-tab-pane label="p-number-login"
      ><p-number-login></p-number-login
    ></el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import FormError from "@/views/LoginReg/childComponents/login/FormError.vue";
import EmailLogin from "@/views/LoginReg/childComponents/login/EmailLogin.vue";
import PNumberLogin from "@/views/LoginReg/childComponents/login/PNumberLogin.vue";

export default defineComponent({
  name: "Login",
  setup() {},
  components: { FormError, EmailLogin, PNumberLogin },
});
</script>

<style lang="scss" scope>
.el-tabs {
  max-width: 900px;
  margin: 0 auto;
}
.login-contaier {
  max-width: 80%;
  min-width: 350px;
  margin: 0 auto;
  .el-alert {
    max-width: 350px;
  }
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
    .el-alert {
      margin-top: 5px;
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
    overflow: hidden;
    & > :nth-last-child(1) {
      float: right;
      line-height: 40px;
    }
  }
}
</style>