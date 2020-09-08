<template>
<h1>Tabs 标签页</h1>
<h2>示例</h2>
<div>
    <h3>基本</h3>
    <Tabs v-model:value="name1">
        <Tab title="导航1">内容1</Tab>
        <Tab title="导航2">内容2</Tab>
        <Tab title="导航3">内容3</Tab>
    </Tabs>
</div>
<div>
    <h3>不可用状态</h3>
    <Tabs v-model:value="name2">
        <Tab title="导航1">内容1</Tab>
        <Tab disabled title="导航2">内容2</Tab>
        <Tab title="导航3">内容3</Tab>
    </Tabs>
</div>
</template>

<script lang="ts">
import {
    ref
} from "vue";
import Tab from "../../lib/Tab.vue";
import Tabs from "../../lib/Tabs.vue";
export default {
    components: {
        Tab,
        Tabs,
    },
    setup() {
        const name1 = ref("导航1");
        const name2 = ref("导航1");
        return {
            name1,
            name2,
        };
    },
};
</script>
