<demo>
不可用状态
</demo>
<template>
    <Button disabled>Disabled</Button>
    <Button theme="link" disabled>Disabled link</Button>
    <Button theme="text" disabled>Disabled text</Button>
</template>

<script lang="ts">
import Button from "../../lib/Button.vue";
export default {
    components: {
        Button
    }
}
</script>
