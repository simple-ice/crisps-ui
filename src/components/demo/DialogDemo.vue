<template>
<div>Dialog 示例</div>
<h1>示例1</h1>
<Button @click="toggle">toggle</Button>
<Dialog :ok="clickOk" :cancel="clickCancel" :maskClosable="true" v-model:visible="isVisible"></Dialog>
</template>

<script lang="ts">
import Dialog from "../../lib/Dialog.vue";
import Button from "../../lib/Button.vue";
import {
    ref
} from 'vue';
export default {
    components: {
        Dialog,
        Button,
    },
    setup() {
        const isVisible = ref(false)
        const toggle = () => {
            isVisible.value = !isVisible.value
        }
        const clickOk = () => {
            return true
        }
        const clickCancel = () => {
            return true
        }
        return {
            isVisible,
            toggle,
            clickOk,
            clickCancel
        }

    }
};
</script>
