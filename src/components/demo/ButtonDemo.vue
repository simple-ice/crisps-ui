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
    <Button size="big" theme="link">Big Link</Button>
    <Button theme="link">Normal Link</Button>
    <Button size="small" theme="link">Small Link</Button>
</div>
<div>
    <Button size="big" theme="text">Big text</Button>
    <Button theme="text">Normal text</Button>
    <Button size="small" theme="text">Small text</Button>
</div>
<h1>示例3</h1>
<div>
    <dir>
        <Button level="main">主要按钮</Button>
        <Button>普通按钮</Button>
        <Button level="danger">危险按钮</Button>
    </dir>
    <dir>
        <Button theme="link" level="main">主要链接按钮</Button>
        <Button theme="link">普通链接按钮</Button>
        <Button theme="link" level="danger">危险链接按钮</Button>
    </dir>
    <dir>
        <Button theme="text" level="main">主要文字按钮</Button>
        <Button theme="text">普通文字按钮</Button>
        <Button theme="text" level="danger">危险文字按钮</Button>
    </dir>
</div>
<h1>示例4</h1>
<Button disabled>Disabled</Button>
<Button theme="link" disabled>Disabled link</Button>
<Button theme="text" disabled>Disabled text</Button>
<h1>示例5</h1>
<div>
    <Button loading>Loading</Button>
    <Button>Done</Button>
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
