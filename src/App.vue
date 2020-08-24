<template>
  <router-view />
</template>

<script>
import { provide, ref } from "vue";
import { router } from "./router";
export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    const asideVisible = ref(width <= 896 ? false : true);
    provide("asideVisible", asideVisible);
    router.afterEach(() => {
      if(width <= 896){
        asideVisible.value = false;
      }
    })
  },
};
</script>
