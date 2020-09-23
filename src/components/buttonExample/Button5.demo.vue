<demo>
加载中状态
</demo>
<template>
    <Button loading>Loading</Button>
    <Button @click="onClick" :loading="isLoading">Click me</Button>
</template>

<script lang="ts">
import {
    ref
} from 'vue';
import Button from "../../lib/Button.vue";
export default {
    components: {
        Button
    },
    setup() {
        const isLoading = ref(false);
        const onClick = () => {
            isLoading.value = !isLoading.value
        }
        return {
            onClick,
            isLoading
        }
    }
}
</script>
