<template>
<h1>Tabs 标签页</h1>
<Demo :component="Tabs1Demo" />
<Demo :component="Tabs2Demo" />
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import Tabs1Demo from '../tabsExample/Tabs1.demo.vue';
import Tabs2Demo from '../tabsExample/Tabs2.demo.vue';
export default {
    components: {
        Demo
    },
    setup() {
        return {
            Tabs1Demo,
            Tabs2Demo,
        };
    },
};
</script>
