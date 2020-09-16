<template>
<div>
    <div class="topnav">
        <router-link to="/" class="logo">
            <svg class="icon">
                <use xlink:href="#icon-food-crisps"></use>
            </svg>
        </router-link>
        <ul class="menu">
            <li>
                <router-link to="/doc">文档</router-link>
            </li>
        </ul>
        <svg v-if="toggleMenuVisible" @click="toggleMenu" class="toggleAside icon">
            <use xlink:href="#icon-menu" />
        </svg>
    </div>
</div>
</template>

<script lang="ts">
import {
    inject,
    Ref
} from "vue";
export default {
    props: {
        toggleMenuVisible: {
            type: Boolean,
            default: false
        }
    },
    setup() {
        const asideVisible = inject < Ref < boolean >> ("asideVisible");
        const toggleMenu = () => {
            asideVisible.value = !asideVisible.value;
        };
        return {
            toggleMenu
        };
    },
};
</script>

<style lang="scss" scoped>
.topnav {
    display: flex;
    padding: 16px;
    position: sticky;
    top: 0px;
    width: 100%;

    justify-content: center;
    align-items: center;

    >.logo {
        max-width: 6em;
        margin-right: auto;

        >svg {
            width: 48px;
            height: 48px;
        }
    }

    >.menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;

        >li {
            margin: 0 1em;
        }
    }

    >.toggleAside {
        display: none;
        width: 32px;
        height: 32px;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        background: fade-out(black, 0.9);
    }

    @media (max-width: 896px) {
        >.menu {
            display: none;
        }

        >.logo {
            margin: 0 auto;
        }

        >.toggleAside {
            display: inline-block;
        }
    }
}
</style>
