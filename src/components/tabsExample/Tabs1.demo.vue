<demo>基本</demo>
<template>
<div>
    <Tabs v-model:value="name">
        <Tab title="导航1">内容1</Tab>
        <Tab title="导航2">内容2</Tab>
        <Tab title="导航3">内容3</Tab>
    </Tabs>
</div>
</template>

<script lang="ts">
import {
    ref
} from 'vue';
import Tab from '../../lib/Tab.vue';
import Tabs from '../../lib/Tabs.vue';
export default {
    components: {
        Tab,
        Tabs
    },
    setup() {
        const name = ref("导航1");
        return {
            name
        }
    }
}
</script>
