<template>
<div>Button 组件</div>
<h1>示例1</h1>
<div>
    <Button>Default Button</Button>
    <Button theme="button">这是一个button</Button>
    <Button theme="link">Link Button</Button>
    <Button theme="text">Text Button</Button>
</div>
<h1>示例2</h1>
<div>
    <Button size="big">Big Button</Button>
    <Button>Normal Button</Button>
    <Button size="small">Small Button</Button>
</div>
<div>
    <Button size="big" theme="link">Big Button</Button>
    <Button theme="link">Normal Button</Button>
    <Button size="small" theme="link">Small Button</Button>
</div>
<div>
    <Button size="big" theme="text">Big Button</Button>
    <Button theme="text">Normal Button</Button>
    <Button size="small" theme="text">Small Button</Button>
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
