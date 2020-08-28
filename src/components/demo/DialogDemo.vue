<template>
<div>Dialog 示例</div>
<h1>示例1</h1>
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
<h1>示例2</h1>
<Button @click="showDialog">toggle</Button>
</template>

<script lang="ts">
import Dialog from "../../lib/Dialog.vue";
import Button from "../../lib/Button.vue";
import {
    ref
} from "vue";
import {
    openDialog
} from '../../lib/openDialog'
export default {
    components: {
        Dialog,
        Button,
    },
    setup() {
        const isVisible = ref(false);
        const toggle = () => {
            isVisible.value = !isVisible.value;
        };
        const clickOk = () => {
            return true;
        };
        const clickCancel = () => {

        };
        const showDialog = () => {
            openDialog({
                title: '标题',
                content: '这是一段内容',
                maskClosable: false,
                ok() {
                    console.log('ok')
                },
                cancel() {
                    console.log('cancel')
                }
            })
        }
        return {
            isVisible,
            toggle,
            clickOk,
            clickCancel,
            showDialog
        };
    },
};
</script>
