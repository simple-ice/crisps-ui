<template>
  <router-view />
</template>

<script>
import { provide, ref } from "vue";
export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    const asideVisible = ref(width <= 896 ? false : true);
    provide("asideVisible", asideVisible);
  },
};
</script>
