<template>
<div class="markdown-body" v-html="md">

</div>
</template>

<script>
import md from '../markdown/install.md'
export default {
    data() {
        return {
            md
        };
    }
}
</script>
