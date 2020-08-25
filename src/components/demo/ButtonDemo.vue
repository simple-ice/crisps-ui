<template>
<div>Button 组件</div>
<h1>示例1</h1>
<div>
    <Button>Default</Button>
    <Button theme="button">这是一个button</Button>
    <Button theme="link">Link Button</Button>
    <Button theme="text">Text Button</Button>
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
