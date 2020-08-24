<template>
<div>
    <Switch v-model:value="isValue" />
</div>
</template>

<script lang="ts">
import Switch from "../../lib/Switch.vue";
import {
    ref
} from 'vue';
export default {
    components: {
        Switch,
    },
    setup() {
        const isValue = ref(false)
        return {
            isValue
        }
    }
};
</script>
