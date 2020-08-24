<template>
<div>
    <Switch :value="isValue" @input="isValue = $event" />
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
