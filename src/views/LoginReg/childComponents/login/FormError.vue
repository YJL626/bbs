<template>{{ errMsg }}</template>

<script lang="ts">
import { defineComponent } from "vue";
interface props {
  errMsg: string;
}
export default defineComponent({
  name: "formError",
  props: {
    errMsg: { type: String, required: true, default: "" },
  },
  setup(props: props) {},
  components: {},
});
</script>

<style lang="scss" scope>
</style>