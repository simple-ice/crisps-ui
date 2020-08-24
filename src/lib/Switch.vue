<template>
<button @click="toggle" :class="{ checked }"><span></span></button>
</template>

<script>
import {
    ref
} from "vue";
export default {
    setup() {
        const checked = ref(false);
        const toggle = () => {
            checked.value = !checked.value;
        };
        return {
            checked,
            toggle,
        };
    },
};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;

button {
    height: $h;
    width: $h * 2;
    border: none;
    background: #9f9f9f;
    border-radius: $h/2;
    position: relative;
    transition: background 250ms;

    &:focus {
        outline: none;
    }

    >span {
        position: absolute;
        top: 2px;
        left: 2px;
        height: $h2;
        width: $h2;
        background: white;
        border-radius: $h2 / 2;
        transition: left 250ms;
    }

    &.checked {
        background: #027be3;
    }

    &.checked>span {
        left: calc(100% - #{$h2} - 2px);
    }
}
</style>
