<demo>基本</demo>
<template>
<div>
    <Button @click="toggle">toggle</Button>
    <Dialog :ok="clickOk" :cancel="clickCancel" :maskClosable="true" v-model:visible="isVisible">
        <template v-slot:title>
            <strong>这是一个提示</strong>
        </template>
        <template v-slot:content>
            <div>薯片！</div>
            <div>好吃！</div>
        </template>
    </Dialog>
</div>
</template>

<script lang="ts">
import Dialog from '../../lib/Dialog.vue';
import Button from '../../lib/Button.vue';
import {
    ref
} from 'vue';
export default {
    components: {
        Dialog,
        Button
    },
    setup() {
        const isVisible = ref(false);
        const toggle = () => {
            isVisible.value = !isVisible.value;
        };
        const clickOk = () => {
            return true;
        };
        const clickCancel = () => {};
        return {
            isVisible,
            toggle,
            clickOk,
            clickCancel
        }
    }
}
</script>
