<template>
<div class="homeWrap">
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
    <div class="features">
        <ul>
            <li>
                <svg class="icon">
                    <use xlink:href="#icon-vuejs-line1"></use>
                </svg>
                <h3>基于 Vue 3</h3>
                <p>骄傲地使用了 Vue 3 Composition API</p>
            </li>
            <li>
                <svg class="icon">
                    <use xlink:href="#icon-ts1"></use>
                </svg>
                <h3>基于 TypeScript </h3>
                <p>源代码采用 TypeScript 书写（非严格检查）</p>
            </li>
            <li>
                <svg class="icon">
                    <use xlink:href="#icon-light"></use>
                </svg>
                <h3>代码易读</h3>
                <p>每个组件的源代码都极其简洁</p>
            </li>
        </ul>
    </div>
    <span class="leftBox"></span>
    <span class="rigftBox">
        <span></span>
    </span>
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

.homeWrap {
    .leftBox {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 500px;
        height: 500px;
        background-image: url('/src/assets/imgbox.png');
        background-repeat: no-repeat;
        background-size: 100%;
    }

    .rigftBox {
        position: absolute;
        right: 100px;
        bottom: 0;
        transform: translateY(50%);
        min-width: 300px;
        min-height: 300px;
        background: transparent;
        border: 3px solid #fcbdab;
        border-radius: 50%;

        >span {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100px;
            height: 100px;
            background: #c05d38;
            border-radius: 50%;
            transform: translate(-50%, -50%);

        }
    }
}

.features {
    margin: 64px auto;
    width: 400px;

    @media (min-width: 896px) {
        width: 800px;
    }

    @media (min-width: 1200px) {
        width: 1200px;
    }

    >ul {
        display: flex;
        flex-wrap: wrap;

        >li {
            width: 400px;
            margin: 16px 0;
            display: grid;
            justify-content: start;
            align-content: space-between;
            grid-template-areas:
                "icon title"
                "icon text";
            grid-template-columns: 80px auto;
            grid-template-rows: 1fr auto;

            >svg {
                grid-area: icon;
                width: 64px;
                height: 64px;
            }

            >h3 {
                grid-area: title;
                font-size: 28px;
            }

            >p {
                grid-area: text
            }
        }
    }
}

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
