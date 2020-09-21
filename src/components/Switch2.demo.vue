<demo>测试</demo>
<template>
    <Switch v-model:value="bool1" size="big" />
    <br />
    <Switch v-model:value="bool2" />
    <br />
    <Switch v-model:value="bool3" size="small" />
</template>

<script lang="ts">
import {
    ref
} from 'vue';
import Switch from '../lib/Switch.vue';
export default {
    components: {
        Switch
    },
    setup() {
        const bool1 = ref(false);
        const bool2 = ref(false);
        const bool3 = ref(false);
        return {
            bool1,
            bool2,
            bool3,
        }
    }
}
</script>
