<template>
<div>
    <div class="topnav">
        <div class="logo">
            <svg class="icon">
                <use xlink:href="#icon-food-crisps"></use>
            </svg>
        </div>
        <ul class="menu">
            <li>菜单1</li>
            <li>菜单2</li>
        </ul>
        <span @click="toggleAside" class="toggleAside"></span>
    </div>
</div>
</template>

<script lang="ts">
import {
    inject,
    Ref
} from "vue";
export default {
    setup() {
        const asideVisible = inject < Ref < boolean >> ("asideVisible");
        const toggleAside = () => {
            asideVisible.value = !asideVisible.value;
        };
        return {
            toggleAside,
        };
    },
};
</script>

<style lang="scss" scoped>
.topnav {
    display: flex;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
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
        width: 24px;
        height: 24px;
        background: red;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
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
