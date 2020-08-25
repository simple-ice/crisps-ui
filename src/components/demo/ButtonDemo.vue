<template>
<div>Button 组件</div>
<h1>按钮类型</h1>
<div>
    <Button>Default</Button>
    <Button theme="link">Link</Button>
    <Button theme="text">Text</Button>
</div>
<h1>按钮尺寸</h1>
<div>
    <Button size="big">Big</Button>
    <Button>Normal</Button>
    <Button size="small">Small</Button>
</div>
<div>
    <Button size="big" theme="link">Big Link</Button>
    <Button theme="link">Normal Link</Button>
    <Button size="small" theme="link">Small Link</Button>
</div>
<div>
    <Button size="big" theme="text">Big text</Button>
    <Button theme="text">Normal text</Button>
    <Button size="small" theme="text">Small text</Button>
</div>
<h1>危险按钮</h1>
<div>
    <dir>
        <Button level="main">Primary</Button>
        <Button>Default</Button>
        <Button level="danger">Danger</Button>
    </dir>
    <dir>
        <Button theme="link" level="main">Primary link</Button>
        <Button theme="link">Default link</Button>
        <Button theme="link" level="danger">Danger link</Button>
    </dir>
    <dir>
        <Button theme="text" level="main">Primary text</Button>
        <Button theme="text">Default text</Button>
        <Button theme="text" level="danger">Danger text</Button>
    </dir>
</div>
<h1>不可用状态</h1>
<div>
    <Button disabled>Disabled</Button>
    <Button theme="link" disabled>Disabled link</Button>
    <Button theme="text" disabled>Disabled text</Button>
</div>
<h1>加载中状态</h1>
<div>
    <Button loading>Loading</Button>
    <Button @click="onClick" :loading="isLoading ? true : false">Click me</Button>
</div>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue'
import {
    ref
} from 'vue'
export default {
    components: {
        Button
    },
    setup() {
        let isLoading = ref < boolean > (false)
        const onClick = () => {
            isLoading.value = !isLoading.value
        }
        return {
            onClick,
            isLoading
        }
    }
}
</script>
