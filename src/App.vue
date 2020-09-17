<template>
<div class="docBtn">

</div>
<router-view />
<span class="leftBox"></span>
<span class="rigftBox"> <span></span>
</span>
</template>

<script>
import {
    provide,
    ref
} from "vue";
import {
    router
} from "./router";
export default {
    setup() {
        const width = document.documentElement.clientWidth;
        const asideVisible = ref(width <= 896 ? false : true);
        provide("asideVisible", asideVisible);
        router.afterEach(() => {
            if (width <= 896) {
                asideVisible.value = false;
            }
        })
    },
};
</script>

<style lang="scss" scoped>
.docBtn {
    position: fixed;
    z-index: -1;
    top: 0;
    right: 0;
    width: 377px;
    height: 240px;
    background-image: url("/src/assets/docBtn.png");
    background-size: 377px 240px;
    background-repeat: no-repeat;

    @media (max-width: 896px) {
        display: none;
    }
}

.leftBox {
    z-index: -1;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 500px;
    height: 500px;
    background-image: url('/src/assets/imgbox.png');
    background-repeat: no-repeat;
    background-size: 100%;

    @media (max-width: 896px) {
        width: 200px;
        height: 200px;
    }

}

.rigftBox {
    position: fixed;
    right: 10vw;
    bottom: 0;
    transform: translateY(50%);
    min-width: 300px;
    min-height: 300px;
    background: transparent;
    border: 2px solid #fcbdab;
    border-radius: 50%;
    z-index: -1;

    @media (max-width: 896px) {
        min-width: 100px;
        min-height: 100px;
    }

    >span {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100px;
        height: 100px;
        background: #c05d38;
        border-radius: 50%;
        transform: translate(-50%, -50%);

        @media (max-width: 896px) {
            width: 50px;
            height: 50px;
        }
    }
}
</style>
