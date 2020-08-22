<template>
  <div>
    导航 | <router-link to="/">Test</router-link> |
    <router-link to="/test">Test2</router-link>
  </div>
  <hr />
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
