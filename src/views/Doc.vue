<template>
<div class="layout">
    <Topnav toggleMenuVisible class="nav" />
    <div class="content">
        <aside v-if="asideVisible">
            <div>
                <h2>文档</h2>
                <ol>
                    <li>
                        <router-link to="/doc/introduce">介绍</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/install">安装</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/get-started">快速上手</router-link>
                    </li>

                </ol>
                <h2>组件列表</h2>
                <ol>
                    <li>
                        <router-link to="/doc/switch">Switch 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/button">Button 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/dialog">Dialog 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs">Tabs 组件</router-link>
                    </li>
                </ol>
            </div>
        </aside>
        <main @click="toggleAsideVisible">
            <router-view />
        </main>
    </div>
</div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import {
    inject,
    onMounted,
    onUnmounted,
    provide,
    reactive,
    ref,
    Ref,
    watchEffect
} from "vue";
import {
    router
} from '../router';
import {
    debounce
} from '../utils/debounce';
export default {
    name: "Doc",
    components: {
        Topnav
    },

    setup() {
        const asideVisible = inject < Ref < boolean >> ("asideVisible");
        const data = reactive({
            listenerPageWidthFn: () => {},
            pageWidth: document.documentElement.clientWidth
        })

        const watchPageWidth = () => {
            const listenerPageWidth = debounce(() => {
                data.pageWidth = document.documentElement.clientWidth;
            }, 300);

            window.addEventListener("resize", listenerPageWidth);

            return listenerPageWidth;
        };
        const toggleAsideVisible = () => {
            if (data.pageWidth <= 896) {
                asideVisible.value = false;
            }
        }
        watchEffect(() => {
            if (data.pageWidth >= 896) {
                asideVisible.value = true;
            }
        })

        onMounted(() => {
            data.listenerPageWidthFn = watchPageWidth();
        })

        onUnmounted(() => {
            window.removeEventListener("resize", data.listenerPageWidthFn);
        })

        return {
            asideVisible,
            toggleAsideVisible
        };
    },
};
</script>

<style lang="scss" scoped>
@import '../index.scss';
$padding-spacing: 200px;

.router-link-active {
    color: #c66844;
    background: #9fcfc4;
}

.layout {
    display: flex;
    flex-direction: column;
    height: 100vh;

    >.nav {
        flex-shrink: 0;
    }

    >.content {
        flex-grow: 1;
        padding: 0 40px 0 340px;
        display: flex;

        >aside {
            flex-shrink: 0;
            background: rgba($color: #000000, $alpha: .2);
            min-width: 300px;
            padding: 16px 0;
            position: fixed;
            top: 0;
            left: 0;
            padding-top: 85px;
            height: 100%;
            z-index: 5;

            >div {
                display: flex;
                flex-direction: column;
                width: 100%;

                >h2 {

                    margin-bottom: 4px;
                    padding-left: 16px;
                }

                >ol {

                    >li {
                        a {
                            display: block;
                            padding: 10px 32px;
                            color: lighten($fontColor, 14%);
                        }
                    }
                }
            }
        }

        >main {
            flex-grow: 1;
            padding: 16px;
            background: rgba($color: #000000, $alpha: .1);
            border-radius: 6px;
            overflow: auto;
        }

        @media (max-width: 896px) {
            padding: 44px 0 0 0;

            >aside {
                background: #f9f9f9;
            }

            >main {
                background: $bgColor;
            }
        }

        @media (max-width: 500px) {
            >aside {
                min-width: 50%;
            }
        }
    }
}
</style>
