<demo>
尺寸
</demo>
<template>
    <div>
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
    </div>
</template>

<script lang="ts">
import Button from "../../lib/Button.vue";
export default {
  components: {
    Button
  }
}
</script>