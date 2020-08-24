<template>
<div>Button 组件</div>
<h1>示例1</h1>
<div>
    <Button>这是一个button</Button>
    <Button theme="button">这是一个button</Button>
    <Button theme="link">这是一个button</Button>
    <Button theme="text">这是一个button</Button>
</div>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue'
export default {
    components: {
        Button
    },
    setup() {
        const onClick = () => {
            console.log('hello')
        }
        return {
            onClick
        }
    }
}
</script>
