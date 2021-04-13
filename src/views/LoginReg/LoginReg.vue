<template>
  <router-link to="/LoginReg/login"><button>login</button></router-link>
  <router-link to="/LoginReg/register"><button>register</button></router-link>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginReg",
  setup() {
    return {};
  },
  components: {},
});
</script>

<style lang="scss" scope>
</style>