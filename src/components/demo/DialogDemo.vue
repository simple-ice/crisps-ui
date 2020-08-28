<template>
<div>Dialog 示例</div>
<h1>示例1</h1>
<Button @click="toggle">toggle</Button>
<Dialog :visible="isVisible"></Dialog>
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
        return {
            isVisible,
            toggle
        }
    }
};
</script>
