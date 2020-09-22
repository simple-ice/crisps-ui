<template>
<div>
    <h1>Switch 开关</h1>
    <Demo :component="Switch1Demo" />
    <Demo :component="Switch2Demo" />
    <Demo :component="Switch3Demo" />
</div>
</template>

<script lang="ts">
import Switch1Demo from '../switchExample/Switch1.demo.vue';
import Switch2Demo from '../switchExample/Switch2.demo.vue';
import Switch3Demo from '../switchExample/Switch3.demo.vue';
import Demo from '../Demo.vue';
import {
    ref
} from "vue";
export default {
    components: {
        Demo
    },
    setup() {
        return {
            Switch1Demo,
            Switch2Demo,
            Switch3Demo
        };
    },
};
</script>
