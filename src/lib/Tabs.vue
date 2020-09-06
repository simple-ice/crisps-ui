<template>
<div>
    <div v-for="(t, index) in titles" :key="index">{{ t }}</div>
    <component v-for="(tab, index) in defaults" :key="index" :is="tab" />
</div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
export default {
    setup(props, context) {
        const defaults = context.slots.default();
        const titles: string[] = [];
        defaults.forEach((tab) => {
            if (tab.type !== Tab) {
                throw new Error("Tabs 子标签必须为 Tab");
            }
            titles.push(tab.props.title);
        });
        return {
            defaults,
            titles,
        };
    },
};
</script>
