<template>
<div class="topnavAndBanner">
    <Topnav />
    <div class="banner">
        <h1>薯片UI</h1>
        <h2>一个普普通通的 UI 框架</h2>
        <p class="actions">
            <a href="https://github.com/simple-ice/crisps-ui">GitHub</a>
            <router-link to="/doc">开始</router-link>
        </p>
    </div>
</div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
    name: "Home",
    components: {
        Topnav,
    },
};
</script>

<style lang="scss" scoped>
$bg-pink: #f9bfaf;
$font-color: #bc654c;
$border-radius: 8px;

.banner {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    >.actions {
        padding: 8px 0;

        a {
            margin: 0 8px;
            background: $bg-pink;
            display: inline-block;
            color: $font-color;
            padding: 8px 24px;
            border-radius: $border-radius;

            &:hover {
                text-decoration: none;
            }
        }
    }
}
</style>
