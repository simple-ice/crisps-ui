<template>
<h1>Dialog 对话框</h1>
<Demo :component="Dialog1Demo" />
<Demo :component="Dialog2Demo" />
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import Dialog1Demo from '../dialogExample/Dialog1.demo.vue';
import Dialog2Demo from '../dialogExample/Dialog2.demo.vue';
export default {
    components: {
        Demo
    },
    setup() {
        return {
            Dialog1Demo,
            Dialog2Demo
        };
    },
};
</script>
