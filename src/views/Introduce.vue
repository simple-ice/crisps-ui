<template>
<div class="markdown-body" v-html="md">

</div>
</template>

<script>
import md from '../markdown/introduce.md';
export default {
    data() {
        return {
            md
        }
    }
}
</script>
