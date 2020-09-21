# 开始使用

请[安装](#/doc/install)本组件库。

然后在你的项目中写入下面的代码：
```
import {Button, Tabs, Switch, Dialog} from "crisps-ui";
```
就能使用该组件了。

## Vue 单文件组件
代码示例：
```
<template>
  <div><Button>按钮</Button></div>
</template>
<script>
  import {Button, Tabs, Switch, Dialog} from "crisps-ui";
  export default {
    components: {Button}
  }
</script>
```