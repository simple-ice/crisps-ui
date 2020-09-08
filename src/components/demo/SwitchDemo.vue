<template>
<div>
    <h1>Switch 开关</h1>
    <h2>示例</h2>
    <div>
        <h3>基本</h3>
        <Switch v-model:value="bool1" />
    </div>
    <div>
        <h3>尺寸</h3>
        <div>
            <Switch v-model:value="bool2" size="big" />
            <Switch v-model:value="bool3" />
            <Switch v-model:value="bool4" size="small" />
        </div>
    </div>
    <div>
        <h3>不可用状态</h3>
        <div>
            <Switch v-model:value="bool5" disabled/>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import Switch from "../../lib/Switch.vue";
import {
    ref
} from "vue";
export default {
    components: {
        Switch,
    },
    setup() {
        const bool1 = ref(false);
        const bool2 = ref(false);
        const bool3 = ref(false);
        const bool4 = ref(false);
        const bool5 = ref(false);
        return {
            bool1,
            bool2,
            bool3,
            bool4,
            bool5,
        };
    },
};
</script>
