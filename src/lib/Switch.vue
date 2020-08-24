<template>
<button @click="toggle" :class="{ checked: value }"><span></span></button>
</template>

<script>
import {
    ref
} from "vue";
export default {
    props: {
        value: Boolean
    },
    setup(props, context) {
        const toggle = () => {
            context.emit('update:value', !props.value)
        };
        return {
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
        transition: all 250ms;
        box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    }

    &.checked {
        background: #027be3;
    }

    &.checked>span {
        left: calc(100% - #{$h2} - 2px);
    }

    &:active {
        >span {
            width: $h2 + 4px;
        }
    }

    &.checked:active {
        >span {
            width: $h2 + 4px;
            margin-left: -4px;
        }
    }
}
</style>
